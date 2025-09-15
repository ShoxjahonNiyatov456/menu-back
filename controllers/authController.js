import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Token generatsiya qilish
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

// Ro‘yxatdan o‘tish
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email allaqachon ro‘yxatdan o‘tgan" });
        }

        const user = await User.create({ name, email, password, role });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user),
        });
    } catch (error) {
        res.status(500).json({ message: "Ro‘yxatdan o‘tishda xato", error });
    }
};

//  Login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Email yoki parol noto‘g‘ri" });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Email yoki parol noto‘g‘ri" });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user),
        });
    } catch (error) {
        res.status(500).json({ message: "Login xatosi", error });
    }
};

// Foydalanuvchi profili
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Profilni olishda xato", error });
    }
};

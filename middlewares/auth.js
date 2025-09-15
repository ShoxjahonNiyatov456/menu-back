import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Token borligini va to‘g‘riligini tekshiruvchi middleware
export const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
        token = token.split(" ")[1]; // "Bearer <token>"

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            return res.status(401).json({ message: "Token yaroqsiz yoki muddati tugagan" });
        }
    } else {
        return res.status(401).json({ message: "Token topilmadi" });
    }
};

// Faqat adminlarga ruxsat beruvchi middleware
export const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({ message: "Faqat admin ruxsatiga ega" });
    }
};

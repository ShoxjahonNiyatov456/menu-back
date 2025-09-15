import express from "express";
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// Barcha productlar
router.get("/", getProducts);

// Bitta product
router.get("/:id", getProductById);

// Yangi product qo'shish
router.post("/", upload.array("images"), createProduct);

// Productni yangilash
router.put("/:id", upload.array("images"), updateProduct);

// Productni o‘chirish
router.delete("/:id", deleteProduct);

export default router;

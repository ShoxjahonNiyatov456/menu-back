import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  reorderProducts,
} from "../controllers/productController.js";
import upload from "../middlewares/uploadMiddleware.js";
import { protect, adminOnly } from "../middlewares/auth.js";

const router = express.Router();

// Barcha productlar
router.get("/", getProducts);

// Bitta product
router.get("/:id", getProductById);

// Yangi product qo'shish
router.post("/", protect, adminOnly, upload.array("images"), createProduct);

// Productni yangilash
router.put("/:id", protect, adminOnly, upload.array("images"), updateProduct);

// Productni o‘chirish
router.delete("/:id", protect, adminOnly, deleteProduct);

// Reorder products
router.put("/reorder/all", protect, adminOnly, reorderProducts);

export default router;

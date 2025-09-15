import express from "express";
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js"
import { protect, adminOnly } from "../middlewares/auth.js";
const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", adminOnly, protect, createCategory);
router.put("/:id", adminOnly, protect, updateCategory);
router.delete("/:id", adminOnly, protect, deleteCategory);

export default router;

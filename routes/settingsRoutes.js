import express from "express";
import {
    getSettings,
    createSettings,
    updateSettings,
} from "../controllers/settingsController.js";

const router = express.Router();

router.get("/", getSettings);
router.post("/", createSettings);
router.put("/", updateSettings);

export default router;

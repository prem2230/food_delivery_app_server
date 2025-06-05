import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addFoodItem, deleteFoodItem, getAllFoodItems, getFoodItemById, updateFoodItem } from "../controllers/foodItem.controller.js";
import ownerMiddleware from "../middleware/ownerMiddleware.js";

const router = express.Router();

router.post('/add-foodItem/:id', authMiddleware,ownerMiddleware, addFoodItem);
router.get('/get-all-foodItems', authMiddleware, getAllFoodItems);
router.get('/get-foodItem/:id', authMiddleware, getFoodItemById);
router.put('/update-foodItem/:id', authMiddleware, ownerMiddleware, updateFoodItem);
router.delete('/delete-foodItem/:id', authMiddleware, ownerMiddleware, deleteFoodItem);

export default router;

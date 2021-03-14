import express from 'express';
const router = express.Router();
import {
  authUser, getUserProfile, registerUser, updateUserProfile
} from '../controllers/userControlers.js';
import { protect } from '../middlewares/authMiddleware.js';

// @desc Fetch all products
// @route  GET /api/products
// @access  Public
router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;

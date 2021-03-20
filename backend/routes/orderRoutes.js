import express from 'express';
const router = express.Router();
import {
addOrderItems,
getOrderById,
updateOrderToPaid
} from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

// @desc Fetch all products
// @route  GET /api/products
// @access  Public
router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid);



export default router;

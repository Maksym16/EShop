import express from 'express';
const router = express.Router();
import {
addOrderItems,
getOrderById,
updateOrderToPaid,
getMyOrders,
getAllOrders,
updateOrderToDeliver,
} from '../controllers/orderController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, getAllOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDeliver );



export default router;

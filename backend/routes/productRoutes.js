import express from 'express'
const router = express.Router()
import { getProductById, getProgucts, deleteProduct } from '../controllers/productsControlers.js'
import { protect, admin } from '../middlewares/authMiddleware.js';
// @desc Fetch all products
// @route  GET /api/products
// @access  Public

router.route('/').get(getProgucts);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router
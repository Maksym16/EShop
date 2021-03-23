import express from 'express';
const router = express.Router();
import {
  getProductById,
  getProgucts,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productsControlers.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

router.route('/').get(getProgucts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;

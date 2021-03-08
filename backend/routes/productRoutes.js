import express from 'express'
const router = express.Router()
import { getProductById, getProgucts } from '../controllers/productsControlers.js'

// @desc Fetch all products
// @route  GET /api/products
// @access  Public

router.route('/').get(getProgucts);

// @desc Fetch single product
// @route  GET /api/products/:id
// @access  Public

router.route('/:id').get(getProductById);

export default router
import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all products
// @route  GET /api/products
// @access  Public

router.get('/', asyncHandler (async (req, res) => {
  const products = await Product.find({})
  throw new Error('hello')
  res.json(products); //will convert arr of prodacts into json format
}));

// @desc Fetch single product
// @route  GET /api/products/:id
// @access  Public

router.get('/:id', asyncHandler (async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product); //will convert arr of prodacts into json format
  } else {

    res.status(404)
    throw new Error('Product not found')
  }
}));

export default router
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc Fetch all products
// @route  GET /api/products
// @access  Public
const getProgucts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products); //will convert arr of prodacts into json format
});


// @desc Fetch single product
// @route  GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product); //will convert arr of prodacts into json format
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
})

export {getProductById, getProgucts}
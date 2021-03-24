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

// @desc Delete product
// @route  DELETE /api/products/:id
// @access  Private / admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove()
    res.json({ message: 'Product was removed'}); //will convert arr of prodacts into json format
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
})

// @desc Create product
// @route  POST /api/products
// @access  Private / admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'SampleCategory',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc Update product
// @route  PUT/api/products/:id
// @access  Private / admin
const updateProduct = asyncHandler(async (req, res) => {
  const {name, price, description, image, brand, category, countInStock} = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name,
    product.price = price,
    product.image = image,
    product.brand = brand,
    product.category = category,
    product.countInStock = countInStock,
    product.description = description

    const updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
  } else {
    res.status
    throw new Error('Product not found');
  }
})

// @desc Create new review
// @route  Post/api/products/:id/review
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  console.log(req.body)
  const product = await Product.findById(req.params.id);
  console.log(product)
  if (product) {
    const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }
    console.log(rating)
    const review = {
      name: req.user.name,
      rating: parseInt(rating, 10),
      comment,
      user: req.user._id,
    }
    console.log(review)
    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status
    throw new Error('Product not found');
  }
})

export { getProductById, getProgucts, deleteProduct, createProduct, updateProduct, createProductReview }
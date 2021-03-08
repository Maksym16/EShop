import User from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc Auth user & get token
// @route  GET /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users); //will convert arr of prodacts into json format
});

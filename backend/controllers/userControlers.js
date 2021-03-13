import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler';

// @desc Auth user & get token
// @route  POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
 
  const user = await User.findOne({ email }); //after we validate user with that email

  if (user && (await user.matchPassword(password))) { //we want to match a password, if thats match we want to retorn user with that token
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401);
    throw new Error('Invalid password or email')
  }
});

// @desc Get user profile
// @route  GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); //after we validate user with that email

  if (user) { //we want to match a password, if thats match we want to retorn user with that token
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});

export { authUser, getUserProfile };
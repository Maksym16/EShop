import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema
  ({
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', //it will create relationship between user and product
    },
  },
  {
    timestamps: {
      type: Date,
    },
  });

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', //it will create relationship between user and product
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: {
      type: Date,
    },
  }
);

const Product = mongoose.model('Product', productSchema);
// const Review = mongoose.model('Review', reviewSchema);
export default Product;

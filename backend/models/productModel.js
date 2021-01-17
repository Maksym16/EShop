import mongoose from 'mongoose';

const reviewSchema =
  ({
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
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
      reqired: true,
    },
    image: {
      type: String,
      reqired: true,
    },
    brand: {
      type: String,
      reqired: true,
    },
    categoty: {
      type: String,
      reqired: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      reqired: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      reqired: true,
      default: 0,
    },
    price: {
      type: Number,
      reqired: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      reqired: true,
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

export default Product;

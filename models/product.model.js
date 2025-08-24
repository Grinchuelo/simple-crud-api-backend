import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required']
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      default: 0
    },
    image: {
      type: String,
      required: [false, 'image is optional'],
      default: null
    },
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
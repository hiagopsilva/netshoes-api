import mongoose, { Schema } from 'mongoose'

const ProductDetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  sizeId: {
    type: Schema.Types.ObjectId,
    ref: 'Size',
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

const productDetails = mongoose.model('productDetails', ProductDetailsSchema)

export default productDetails

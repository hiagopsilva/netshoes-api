import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  code: {
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
  detailsId: {
    type: Schema.Types.ObjectId,
    ref: 'ProductDetails',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const product = mongoose.model('product', ProductSchema)

export default product

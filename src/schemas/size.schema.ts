import mongoose, { Schema } from 'mongoose'

const sizeSchema = new Schema({
  code: { type: String, required: true },
  label: { type: String, required: true },
  productDetails: [{ type: Schema.Types.ObjectId, ref: 'ProductDetails' }],
})

const Size = mongoose.model('size', sizeSchema)

export default Size

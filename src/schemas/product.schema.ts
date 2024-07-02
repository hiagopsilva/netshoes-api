import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SizeSchema = new Schema({
  code: { type: String, required: true },
  label: { type: String, required: true },
})

const ProductDetailsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  available: { type: Boolean, required: true },
  visible: { type: Boolean, required: true },
  size: { type: SizeSchema, required: true },
  sku: { type: String, required: true },
})

const ProductSchema = new Schema({
  code: { type: String, required: true },
  available: { type: Boolean, required: true },
  visible: { type: Boolean, required: true },
  details: { type: ProductDetailsSchema, required: true },
  image: { type: String, required: true },
})

const DepartmentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
})

const BrandSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
})

const ProductTypeSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
})

const SelectedProductSchema = new Schema({
  selectedProduct: { type: String, required: true },
  department: { type: DepartmentSchema, required: true },
  brand: { type: BrandSchema, required: true },
  productType: { type: ProductTypeSchema, required: true },
  name: { type: String, required: true },
  product: { type: [ProductSchema], required: true },
  stockAvailable: { type: Boolean, required: true },
})

const SelectedProduct = mongoose.model('SelectedProduct', SelectedProductSchema)

export default SelectedProduct

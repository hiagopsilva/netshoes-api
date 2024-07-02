/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectedProduct from '../../schemas/product.schema'
import { ProductRepository } from '../product-repository'

export class MongoProductRepository implements ProductRepository {
  async create(data: any) {
    const product = await SelectedProduct.create(data)
    return product
  }

  async list() {
    const product = await SelectedProduct.find()

    return product
  }

  async findOneAndUpdate(id: any, value: any, config: any) {
    const product = await SelectedProduct.findByIdAndUpdate(id, value, config)

    return product
  }
}

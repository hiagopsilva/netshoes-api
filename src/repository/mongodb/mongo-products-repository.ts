/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectedProduct from '../../schemas/product.schema'
import { ProductRepository } from '../product-repository'

export class MongoProductRepository implements ProductRepository {
  async create(data: any) {
    const product = await SelectedProduct.create(data)
    return product
  }

  async findById(id: string) {
    const product = await SelectedProduct.findById(id)

    return product
  }
}

import { ProductRepository } from '../product-repository'
import Product from '../../schemas/product.schema'

export class MongooseProductRepository implements ProductRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(data: any) {
    const product = await Product.create(data)
    return product
  }
}

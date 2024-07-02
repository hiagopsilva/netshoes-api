import { ProductDetailsRepository } from '../product-details-repository'
import ProductDetails from '../../schemas/productDetails.schema'

export class MongooseProductDetailsRepository
  implements ProductDetailsRepository
{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(data: any) {
    const productDetails = await ProductDetails.create(data)
    return productDetails
  }
}

import SelectedProduct from '../../schemas/product.schema'
import { ProductRepository } from '../product-repository'

export class MongoProductRepository implements ProductRepository {
  async create(data: ProductType.Root) {
    const product = await SelectedProduct.create(data)
    return product
  }

  async list() {
    const product = await SelectedProduct.find()

    return product
  }

  async find(data: ProductType.IsFavoriteList) {
    const product = await SelectedProduct.find(data)

    return product
  }

  async findOneAndUpdate(
    id: string,
    value: Pick<ProductType.IsFavorite, 'isFavorite'>,
    config: { new: boolean },
  ) {
    const product = await SelectedProduct.findByIdAndUpdate(id, value, config)

    return product
  }
}

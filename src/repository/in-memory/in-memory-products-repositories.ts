import { ProductRepository } from '../product-repository'
import { ObjectId } from 'bson'

import { faker } from '@faker-js/faker'

export class InMemoryProductsRepositories implements ProductRepository {
  public items: ProductType.Item[] = []

  async create(productPayload: ProductType.Root) {
    const newId = new ObjectId()

    const newProduct = {
      ...productPayload,
      _id: newId.toHexString(),
      isFavorite: faker.datatype.boolean(),
    }

    this.items.push(newProduct)

    return newProduct
  }

  async list() {
    return this.items
  }

  async find({ isFavorite }: ProductType.IsFavoriteList) {
    return this.items.filter((item) => item.isFavorite === isFavorite)
  }

  async findOneAndUpdate(
    productId: string,
    { isFavorite }: ProductType.IsFavoriteList,
  ) {
    const productIndex = this.items.findIndex((item) => item._id === productId)

    this.items[productIndex].isFavorite = isFavorite

    return this.items[productIndex]
  }
}

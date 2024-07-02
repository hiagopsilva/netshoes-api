import { MongooseProductRepository } from '../../repositories/mongoose/mongoose-product-repository'
import { CreateProductUseCase } from '../create-product'

export function makeCreateProductUseCase() {
  const productRepository = new MongooseProductRepository()

  const productUseCase = new CreateProductUseCase(productRepository)

  return productUseCase
}

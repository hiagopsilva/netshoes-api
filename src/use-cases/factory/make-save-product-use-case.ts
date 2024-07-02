import { MongoProductRepository } from '../../repository/mongodb/mongo-products-repository'
import { CreateProductUseCase } from '../save-product-use-case'

export function MakeSaveProductUseCase() {
  const productRepository = new MongoProductRepository()
  const createProductUseCase = new CreateProductUseCase(productRepository)

  return createProductUseCase
}

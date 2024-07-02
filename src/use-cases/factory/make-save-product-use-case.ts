import { MongoProductRepository } from '../../repository/mongodb/mongo-products-repository'
import { SaveProductUseCase } from '../save-product-use-case'

export function MakeSaveProductUseCase() {
  const productRepository = new MongoProductRepository()
  const createProductUseCase = new SaveProductUseCase(productRepository)

  return createProductUseCase
}

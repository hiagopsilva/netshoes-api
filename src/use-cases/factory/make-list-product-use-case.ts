import { MongoProductRepository } from '../../repository/mongodb/mongo-products-repository'
import { ListProductUseCase } from '../list-product-use-case'

export function MakeListProductUseCase() {
  const productRepository = new MongoProductRepository()

  const listProductUseCase = new ListProductUseCase(productRepository)

  return listProductUseCase
}

import { MongoProductRepository } from '../../repository/mongodb/mongo-products-repository'
import { FavoriteProductUseCase } from '../favorite-product-use-case'

export function MakeFavoriteProductUseCase() {
  const productRepository = new MongoProductRepository()

  const favoriteProductUseCase = new FavoriteProductUseCase(productRepository)

  return favoriteProductUseCase
}

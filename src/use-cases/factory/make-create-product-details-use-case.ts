import { MongooseProductDetailsRepository } from '../../repositories/mongoose/mongoose-product-details-repository'
import { CreateProductDetailsUseCase } from '../create-product-details'

export function makeCreateProductDetailsUseCase() {
  const productDetailsRepository = new MongooseProductDetailsRepository()

  const productDetailsUseCase = new CreateProductDetailsUseCase(
    productDetailsRepository,
  )

  return productDetailsUseCase
}

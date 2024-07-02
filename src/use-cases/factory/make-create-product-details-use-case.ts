import { MongooseSizeRepository } from '../../repositories/mongoose/mongoose-size-repository'
import { CreateProductDetailsUseCase } from '../create-product-details'

export function makeCreateProductDetailsUseCase() {
  const productDetailsRepository = new MongooseSizeRepository()

  const productDetailsUseCase = new CreateProductDetailsUseCase(
    productDetailsRepository,
  )

  return productDetailsUseCase
}

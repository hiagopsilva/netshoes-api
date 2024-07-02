import ProductDetails from '../schemas/productDetails.schema'
import { ProductDetailsRepository } from '../repositories/product-details-repository'

interface CreateProductDetailsUseCaseResponse {
  productDetails: typeof ProductDetails
}

export class CreateProductDetailsUseCase {
  constructor(private productDetailsRepository: ProductDetailsRepository) {}

  async execute({
    code,
    label,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any): Promise<CreateProductDetailsUseCaseResponse> {
    const productDetails = await this.productDetailsRepository.create({
      code,
      label,
    })

    return { productDetails }
  }
}

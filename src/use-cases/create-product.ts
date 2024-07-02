import Product from '../schemas/product.schema'
import { ProductRepository } from '../repositories/product-repository'

interface CreateProductUseCaseResponse {
  product: typeof Product
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    code,
    available,
    visible,
    detailsId,
    image,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any): Promise<CreateProductUseCaseResponse> {
    const product = await this.productRepository.create({
      code,
      available,
      visible,
      detailsId,
      image,
    })

    return { product }
  }
}

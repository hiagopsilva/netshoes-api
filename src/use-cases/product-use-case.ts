import Product from '../schemas/product.schema'
import { ProductRepository } from '../repository/product-repository'

interface CreateProductUseCaseResponse {
  product: typeof Product
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(data: any): Promise<CreateProductUseCaseResponse> {
    const product = await this.productRepository.create(data)

    return { product }
  }
}

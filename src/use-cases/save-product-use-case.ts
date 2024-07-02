import Product from '../schemas/product.schema'
import { ProductRepository } from '../repository/product-repository'

interface CreateProductUseCaseResponse {
  product: typeof Product
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: ProductType.Root): Promise<CreateProductUseCaseResponse> {
    const product = await this.productRepository.create(data)

    return { product }
  }
}

import Product from '../schemas/product.schema'
import { ProductRepository } from '../repository/product-repository'

interface ListProductUseCaseResponse {
  product: typeof Product
}

export class ListProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(): Promise<ListProductUseCaseResponse> {
    const product = await this.productRepository.list()

    return { product }
  }
}

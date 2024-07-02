import { ProductRepository } from '../repository/product-repository'

interface SaveProductUseCaseResponse {
  product: ProductType.Item
}

export class SaveProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: ProductType.Root): Promise<SaveProductUseCaseResponse> {
    const product = await this.productRepository.create(data)

    return { product }
  }
}

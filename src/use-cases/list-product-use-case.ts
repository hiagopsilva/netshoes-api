import Product from '../schemas/product.schema'
import { ProductRepository } from '../repository/product-repository'

interface ListProductUseCaseResponse {
  product: typeof Product
}

export class ListProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    isFavorite,
  }: ProductType.IsFavoriteList): Promise<ListProductUseCaseResponse> {
    if (isFavorite) {
      const product = await this.productRepository.find({ isFavorite })

      return { product }
    }

    const product = await this.productRepository.list()

    return { product }
  }
}

import Product from '../schemas/product.schema'
import { ProductRepository } from '../repository/product-repository'

interface FavoriteProductUseCaseResponse {
  product: typeof Product
}

export class FavoriteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productId,
    isFavorite,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any): Promise<FavoriteProductUseCaseResponse> {
    const product = await this.productRepository.findOneAndUpdate(
      productId,
      {
        isFavorite,
      },
      {
        new: true,
      },
    )

    return { product }
  }
}

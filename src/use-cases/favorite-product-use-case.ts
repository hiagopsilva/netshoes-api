import { ProductRepository } from '../repository/product-repository'

interface FavoriteProductUseCaseResponse {
  product: ProductType.Item
}

export class FavoriteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productId,
    isFavorite,
  }: ProductType.IsFavorite): Promise<FavoriteProductUseCaseResponse> {
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

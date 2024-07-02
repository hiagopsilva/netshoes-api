import { InMemoryProductsRepositories } from '@/repository/in-memory/in-memory-products-repositories'
import { expect, describe, it, beforeEach } from 'vitest'
import { SaveProductUseCase } from './save-product-use-case'
import { PAYLOAD_SAVE_PRODUCT } from '@/utils/payloads'

let productsRepository: InMemoryProductsRepositories
let sut: SaveProductUseCase

describe('Favorite Product Use Case', () => {
  beforeEach(async () => {
    productsRepository = new InMemoryProductsRepositories()
    sut = new SaveProductUseCase(productsRepository)
  })

  it('should be able to favorite product', async () => {
    const productCreated = await productsRepository.create(PAYLOAD_SAVE_PRODUCT)

    const { product } = await sut.execute(productCreated)

    const productList = await productsRepository.findOneAndUpdate(product._id, {
      isFavorite: true,
    })

    expect(productList.isFavorite).toEqual(true)
  })

  it('should be able to no favorite product', async () => {
    const productCreated = await productsRepository.create(PAYLOAD_SAVE_PRODUCT)

    const { product } = await sut.execute(productCreated)

    const productList = await productsRepository.findOneAndUpdate(product._id, {
      isFavorite: false,
    })

    expect(productList.isFavorite).toEqual(false)
  })
})

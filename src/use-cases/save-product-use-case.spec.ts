import { InMemoryProductsRepositories } from '@/repository/in-memory/in-memory-products-repositories'
import { expect, describe, it, beforeEach } from 'vitest'
import { SaveProductUseCase } from './save-product-use-case'
import { PAYLOAD_SAVE_PRODUCT } from '@/utils/payloads'

let productsRepository: InMemoryProductsRepositories
let sut: SaveProductUseCase

describe('Save Product Use Case', () => {
  beforeEach(async () => {
    productsRepository = new InMemoryProductsRepositories()
    sut = new SaveProductUseCase(productsRepository)
  })

  it('should be able to save product', async () => {
    const productCreated = await productsRepository.create(PAYLOAD_SAVE_PRODUCT)

    const { product } = await sut.execute(productCreated)

    expect(product._id).toEqual(expect.any(String))
  })
})

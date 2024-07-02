import { InMemoryProductsRepositories } from '@/repository/in-memory/in-memory-products-repositories'
import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest'
import { SaveProductUseCase } from './save-product-use-case'
import { PAYLOAD_SAVE_PRODUCT } from '@/utils/payloads'

let productsRepository: InMemoryProductsRepositories
let sut: SaveProductUseCase

describe('List Product Use Case', () => {
  beforeEach(async () => {
    productsRepository = new InMemoryProductsRepositories()
    sut = new SaveProductUseCase(productsRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to list product', async () => {
    const productCreated = await productsRepository.create(PAYLOAD_SAVE_PRODUCT)

    await sut.execute(productCreated)

    const productList = await productsRepository.list()

    expect(productList).toEqual(expect.any(Array))
  })
})

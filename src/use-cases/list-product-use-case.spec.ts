import { InMemoryProductsRepositories } from '@/repository/in-memory/in-memory-products-repositories'
import { expect, describe, it, beforeEach } from 'vitest'
import { SaveProductUseCase } from './save-product-use-case'
import { PAYLOAD_SAVE_PRODUCT } from '@/utils/payloads'
import { faker } from '@faker-js/faker'

let productsRepository: InMemoryProductsRepositories
let sut: SaveProductUseCase

describe('List Product Use Case', () => {
  beforeEach(async () => {
    productsRepository = new InMemoryProductsRepositories()
    sut = new SaveProductUseCase(productsRepository)
  })

  it('should be able to list product', async () => {
    const productCreated = await productsRepository.create(PAYLOAD_SAVE_PRODUCT)

    await sut.execute(productCreated)

    const productList = await productsRepository.list()

    expect(productList).toEqual(expect.any(Array))
  })

  it('should be able to list favorites product', async () => {
    const productCreated = await productsRepository.create(PAYLOAD_SAVE_PRODUCT)

    await sut.execute(productCreated)

    const productList = await productsRepository.find({
      isFavorite: faker.datatype.boolean(),
    })

    console.log({ productList })

    expect(productList).toEqual(expect.any(Array))
  })
})

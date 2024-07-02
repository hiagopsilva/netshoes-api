import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'
import { MakeFavoriteProductUseCase } from '../../../use-cases/factory/make-favorite-product-use-case'
import { MakeListProductUseCase } from '@/use-cases/factory/make-list-product-use-case'

export async function favoriteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    productId: z.string(),
    isFavorite: z.boolean(),
  })

  const { productId, isFavorite } = createBodySchema.parse(request.body)

  try {
    const makeFavoriteProductUseCase = MakeFavoriteProductUseCase()

    await makeFavoriteProductUseCase.execute({
      productId,
      isFavorite,
    })

    const makeListProductUseCase = MakeListProductUseCase()

    const { product } = await makeListProductUseCase.execute({
      isFavorite: true,
    })

    const listProducts = product.map((product) => {
      return {
        _id: product._id,
        name: product.name,
        image: product.product[0].image,
        isFavorite: product.isFavorite,
      }
    })

    return reply.status(200).send(listProducts)
  } catch (err) {
    reply.status(500).send({ message: 'Internal server error', error: err })
  }
}

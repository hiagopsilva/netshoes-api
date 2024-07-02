/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'
import { MakeFavoriteProductUseCase } from '../../../use-cases/factory/make-favorite-product-use-case'

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

    const { product }: any = await makeFavoriteProductUseCase.execute({
      productId,
      isFavorite,
    })

    return reply.status(200).send(product)
  } catch (err) {
    console.log({ err })
    throw err
  }
}

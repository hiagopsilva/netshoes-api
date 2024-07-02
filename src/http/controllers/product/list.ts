import { FastifyReply, FastifyRequest } from 'fastify'

import { MakeListProductUseCase } from '../../../use-cases/factory/make-list-product-use-case'
import { z } from 'zod'

export async function listProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    isFavorite: z
      .string()
      .optional()
      .transform((val) => val === 'true'),
  })

  const { isFavorite } = createBodySchema.parse(request.query)

  try {
    const makeListProductUseCase = MakeListProductUseCase()

    const { product } = await makeListProductUseCase.execute({
      isFavorite,
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
    console.log({ err })
    reply.status(500).send({ message: 'Internal server error', error: err })
  }
}

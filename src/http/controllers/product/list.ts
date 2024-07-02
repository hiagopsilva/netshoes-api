import { FastifyReply, FastifyRequest } from 'fastify'

import { MakeListProductUseCase } from '../../../use-cases/factory/make-list-product-use-case'

export async function listProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const makeListProductUseCase = MakeListProductUseCase()

    const { product } = await makeListProductUseCase.execute()

    return reply.status(200).send(product)
  } catch (err) {
    console.log({ err })
    throw err
  }
}

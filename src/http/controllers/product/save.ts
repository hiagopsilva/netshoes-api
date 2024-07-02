import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { MakeSaveProductUseCase } from '../../../use-cases/factory/make-save-product-use-case'

export async function saveProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    selectedProduct: z.string(),
    stockAvailable: z.boolean(),
    department: z.object({
      id: z.string(),
      name: z.string(),
    }),
    brand: z.object({
      id: z.string(),
      name: z.string(),
    }),
    productType: z.object({
      id: z.string(),
      name: z.string(),
    }),
    name: z.string(),
    product: z.array(
      z.object({
        code: z.string(),
        available: z.boolean(),
        visible: z.boolean(),
        details: z.object({
          name: z.string(),
          description: z.string(),
          available: z.boolean(),
          visible: z.boolean(),
          size: z.object({
            code: z.string(),
            label: z.string(),
          }),
          sku: z.string(),
        }),
        image: z.string(),
      }),
    ),
  })

  const bodyValuesToSave = createBodySchema.parse(request.body)

  try {
    const makeSaveProductUseCase = MakeSaveProductUseCase()

    const { product } = await makeSaveProductUseCase.execute(bodyValuesToSave)

    return reply.status(200).send(product)
  } catch (err) {
    reply.status(500).send({ message: 'Internal server error', error: err })
  }
}

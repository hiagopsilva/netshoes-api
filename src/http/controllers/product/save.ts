import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateSizeUseCase } from '../../../use-cases/factory/make-create-size-use-case'
import { makeCreateProductDetailsUseCase } from '../../../use-cases/factory/make-create-product-details-use-case'

export async function saveProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    size: z.object({
      code: z.string(),
      label: z.string(),
    }),
    name: z.string(),
    description: z.string(),
    available: z.boolean(),
    visible: z.boolean(),
    sku: z.string(),
  })

  const {
    size: { code, label },
    name,
    description,
    available,
    visible,
    sku,
  } = createBodySchema.parse(request.body)

  try {
    const createSizeUseCase = makeCreateSizeUseCase()

    const { size } = await createSizeUseCase.execute({ code, label })

    const createProductDetailsUseCase = makeCreateProductDetailsUseCase()

    const { productDetails } = await createProductDetailsUseCase.execute({
      code,
      label,
    })

    return reply.status(200).send({
      name,
      description,
      available,
      visible,
      sku,
      sizeId: size,
    })
  } catch (err) {
    console.log({ err })
    throw err
  }

  return reply.status(201).send()
}

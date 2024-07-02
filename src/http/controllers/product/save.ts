/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateSizeUseCase } from '../../../use-cases/factory/make-create-size-use-case'
import { makeCreateProductDetailsUseCase } from '../../../use-cases/factory/make-create-product-details-use-case'
import { makeCreateProductUseCase } from '../../../use-cases/factory/make-create-product-use-case'

export async function saveProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    code: z.string(),
    available: z.boolean(),
    visible: z.boolean(),
    image: z.string(),
    details: z.object({
      size: z.object({
        code: z.string(),
        label: z.string(),
      }),
      name: z.string(),
      description: z.string(),
      available: z.boolean(),
      visible: z.boolean(),
      sku: z.string(),
    }),
  })

  const {
    code: productCode,
    available: productAvailable,
    visible: productVisible,
    image,
    details: {
      size: { code, label },
      name,
      description,
      available,
      visible,
      sku,
    },
  } = createBodySchema.parse(request.body)

  try {
    const createSizeUseCase = makeCreateSizeUseCase()

    const { size }: any = await createSizeUseCase.execute({ code, label })

    const createProductDetailsUseCase = makeCreateProductDetailsUseCase()

    const { productDetails } = await createProductDetailsUseCase.execute({
      name,
      description,
      available,
      visible,
      sku,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sizeId: size._id as any,
    })

    const createProductUseCase = makeCreateProductUseCase()

    const { product } = await createProductUseCase.execute({
      code: productCode,
      available: productAvailable,
      visible: productVisible,
      detailsId: productDetails,
      image,
    })

    return reply.status(200).send(product)
  } catch (err) {
    console.log({ err })
    throw err
  }

  return reply.status(201).send()
}

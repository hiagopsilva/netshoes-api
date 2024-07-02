import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateSizeUseCase } from '../../../use-cases/factory/make-create-size-use-case'

export async function createSize(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    code: z.string(),
    label: z.string(),
  })

  const { code, label } = createBodySchema.parse(request.body)

  try {
    const createUseCase = makeCreateSizeUseCase()

    console.log({ code2: code, label })

    await createUseCase.execute({ code, label })
  } catch (err) {
    console.log({ err })
    throw err
  }

  return reply.status(201).send()
}

import fastify from 'fastify'
import { ZodError } from 'zod'
import dbConnection from './lib/mongodb'

dbConnection()

export const app = fastify()

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  return reply.status(500).send({ message: 'Internal server error' })
})

import { FastifyInstance } from 'fastify'
import { createSize } from './controllers/size/create'

export async function SizeRoutes(app: FastifyInstance) {
  app.post('/size/create', createSize)
}

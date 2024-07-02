import { FastifyInstance } from 'fastify'
import { saveProduct } from './controllers/product/save'

export async function ProductRoutes(app: FastifyInstance) {
  app.post('/product/save', saveProduct)
}

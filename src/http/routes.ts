import { FastifyInstance } from 'fastify'
import { saveProduct } from './controllers/product/save'
import { listProduct } from './controllers/product/list'

export async function ProductRoutes(app: FastifyInstance) {
  app.post('/product/save', saveProduct)
  app.get('/product', listProduct)
}

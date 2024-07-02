import { FastifyInstance } from 'fastify'
import { saveProduct } from './controllers/product/save'
import { listProduct } from './controllers/product/list'
import { favoriteProduct } from './controllers/product/favorite'

export async function ProductRoutes(app: FastifyInstance) {
  app.get('/product', listProduct)
  app.post('/product/save', saveProduct)
  app.post('/product/favorite', favoriteProduct)
}

import { app } from '@/app'
import { PAYLOAD_SAVE_PRODUCT } from '@/utils/payloads'
import mongoose from 'mongoose'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Favorite Product (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should to be able to favorite product', async () => {
    const responseSave = await request(app.server)
      .post('/product/save')
      .send(PAYLOAD_SAVE_PRODUCT)

    const response = await request(app.server).post('/product/favorite').send({
      productId: responseSave.body._id,
      isFavorite: true,
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toBeDefined()
    expect(response.body).not.toBeNull()
  })

  it('should to be able to no favorite product', async () => {
    const responseSave = await request(app.server)
      .post('/product/save')
      .send(PAYLOAD_SAVE_PRODUCT)

    const response = await request(app.server).post('/product/favorite').send({
      productId: responseSave.body._id,
      isFavorite: false,
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toBeDefined()
    expect(response.body).not.toBeNull()
  })

  it('should to be not able list  product', async () => {
    const responseSave = await request(app.server)
      .post('/product/save')
      .send(PAYLOAD_SAVE_PRODUCT)

    await mongoose.disconnect()

    const response = await request(app.server).post('/product/favorite').send({
      productId: responseSave.body._id,
      isFavorite: true,
    })

    expect(response.statusCode).toEqual(500)
    expect(response.body).not.toBeNull()
  })
})

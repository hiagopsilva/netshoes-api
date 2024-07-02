import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('List Product (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should to be able to list product', async () => {
    const response = await request(app.server).get('/product').send()

    expect(response.statusCode).toEqual(200)
    expect(response.body).toBeDefined()
    expect(response.body).not.toBeNull()
  })

  it('should to be able to list favorites product', async () => {
    const response = await request(app.server).get(
      `/product?isFavorite=${true}`,
    )

    expect(response.statusCode).toEqual(200)
    expect(response.body).toBeDefined()
    expect(response.body).not.toBeNull()
    expect(response.body).toEqual(expect.any(Array))
    expect(response.body[0].isFavorite).toEqual(true)
  })
})

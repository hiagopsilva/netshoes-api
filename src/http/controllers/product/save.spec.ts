import { app } from '@/app'
import { PAYLOAD_SAVE_PRODUCT } from '@/utils/payloads'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Save Product (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should to be able to save product', async () => {
    const response = await request(app.server)
      .post('/product/save')
      .send(PAYLOAD_SAVE_PRODUCT)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toBeDefined()
    expect(response.body).not.toBeNull()
  })
})

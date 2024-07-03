import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { handleProductJob } from './fetch-data'

describe('Job Cron', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should to be able to favorite product', async () => {
    const listProducts = await handleProductJob()

    expect(listProducts).toBeDefined()
    expect(listProducts).not.toBeNull()
    expect(listProducts).not.toBeNull()
    expect(listProducts).toEqual(expect.any(Array))
  })
})

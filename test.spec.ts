import { describe, expect, it } from 'vitest'

describe('Test running', () => {
  it('should to be running test', async () => {
    const example = { ok: true }

    expect(example).toEqual({ ok: true })
  })
})

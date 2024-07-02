import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

const envSchema = z.object({
  NODE_ENV: z.enum(['DEV', 'TEST', 'PRD']).default('DEV'),
  PORT: z.coerce.number().default(3333),
  API_EXTERNAL: z.string(),
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse({
  ...process.env,
  NODE_ENV: process.env.NODE_ENV?.toUpperCase(),
})

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data

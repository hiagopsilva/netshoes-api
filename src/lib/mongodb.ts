import { env } from '../env'

import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    console.log('Connecting to database')
    await mongoose.connect(env.DATABASE_URL)

    console.log('Connecting to database')
  } catch (e) {
    console.error(e)
  }
}

export default dbConnection
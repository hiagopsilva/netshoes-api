import { SizeRepository } from '../size-repository'
import Size from '../../schemas/size.schema'

export class MongooseSizeRepository implements SizeRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(data: any) {
    const size = await Size.create(data)
    return size
  }
}

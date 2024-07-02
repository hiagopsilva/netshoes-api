import { MongooseSizeRepository } from '../../repositories/mongoose/mongoose-size-repository'
import { CreateSizeUseCase } from '../create-size'

export function makeCreateSizeUseCase() {
  const sizeRepository = new MongooseSizeRepository()
  const sizeUseCase = new CreateSizeUseCase(sizeRepository)

  return sizeUseCase
}

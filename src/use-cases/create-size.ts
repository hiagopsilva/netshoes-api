import Size from '../schemas/size.schema'
import { SizeRepository } from '../repositories/size-repository'

interface CreateSizeUseCaseResponse {
  size: typeof Size
}

export class CreateSizeUseCase {
  constructor(private sizeRepository: SizeRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute({ code, label }: any): Promise<CreateSizeUseCaseResponse> {
    const size = await this.sizeRepository.create({
      code,
      label,
    })

    return { size }
  }
}

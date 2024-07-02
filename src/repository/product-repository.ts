/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductRepository {
  create: (data: ProductType.Root) => Promise<any>
  list: () => Promise<any>
  findOneAndUpdate: (
    id: string,
    value: Pick<ProductType.IsFavorite, 'isFavorite'>,
    config: { new: boolean },
  ) => Promise<any>
}

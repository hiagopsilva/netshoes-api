/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductRepository {
  create: (data: any) => Promise<any>
  list: () => Promise<any>
}

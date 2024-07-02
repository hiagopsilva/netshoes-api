export interface ProductRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create: (data: any) => Promise<any>
}

export interface ProductDetailsRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create: (data: any) => Promise<any>
}

declare namespace ProductType {
  type Department = {
    id: string
    name: string
  }

  type Brand = {
    id: string
    name: string
  }

  type ProductType = {
    id: string
    name: string
  }

  type Size = {
    code: string
    label: string
  }

  type Details = {
    name: string
    description: string
    available: boolean
    visible: boolean
    size: Size
    sku: string
  }

  type Product = {
    code: string
    available: boolean
    visible: boolean
    details: Details
    image: string
  }

  type Root = {
    selectedProduct: string
    department: Department
    brand: Brand
    productType: ProductType
    name: string
    product: Product[]
    stockAvailable: boolean
  }

  type Item = Root & {
    _id: string
    isFavorite: boolean
  }

  type IsFavorite = {
    productId: string
    isFavorite: boolean
  }

  type IsFavoriteList = Pick<ProductType.IsFavorite, 'isFavorite'>
}

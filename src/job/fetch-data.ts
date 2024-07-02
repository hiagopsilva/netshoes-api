import { app } from '@/app'
import cron from 'node-cron'
import { MakeSaveProductUseCase } from '@/use-cases/factory/make-save-product-use-case'
import { MakeListProductUseCase } from '@/use-cases/factory/make-list-product-use-case'
import { env } from '@/env'

const fetchData = async () => {
  cron.schedule('0 * * * *', async () => {
    console.log('Running a task...')

    await app.ready()

    const fetchData = await fetch(env.API_EXTERNAL)

    const makeSaveProductUseCase = MakeSaveProductUseCase()

    const makeListProductsUseCase = MakeListProductUseCase()

    const { product: productsList } = await makeListProductsUseCase.execute({
      isFavorite: false,
    })

    const productsSavedCode = productsList.map(
      (product: ProductType.Item) => product.selectedProduct,
    )

    const { products } = await fetchData.json()

    const productsToSave = products.filter(
      (product: ProductType.Item) =>
        !productsSavedCode.includes(product.selectedProduct),
    )

    const list = []

    for (const productToSave of productsToSave) {
      const { product } = await makeSaveProductUseCase.execute(productToSave)

      list.push(product)
    }

    await app.close()
    console.log(`Task completed in ${new Date().toISOString()}`)
  })
}

export default fetchData

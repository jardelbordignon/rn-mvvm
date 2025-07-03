// https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts
import { api } from './api-client'
import type { GetProduct } from './get-product'

export type GetProducts = Array<GetProduct>

export async function getProducts() {
  return api.get('products').json<GetProducts>()
}

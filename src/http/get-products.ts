import { api } from './api-client'
import type { GetProductResponse } from './get-product'

type GetProductsRequest = {
  page: number
  perPage: number
  category?: string
}

interface GetProductsResponse {
  products: Array<GetProductResponse>
  total: number
  skip: number
  limit: number
}

export async function getProducts({ page, perPage, category }: GetProductsRequest) {
  const offset = (Math.max(1, page ?? 1) - 1) * perPage
  const url = category ? `products/category/${category}` : 'products'
  return api.get(`${url}?skip=${offset}&limit=${perPage}`).json<GetProductsResponse>()
}

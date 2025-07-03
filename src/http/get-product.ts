// https://fakestoreapi.com/docs#tag/Products/operation/getProductById
import { api } from './api-client'

export interface GetProduct {
  id: number
  title: string
  price: number,
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function getProduct(id: number) {
  return api.get(`products/${id}`).json<GetProduct>()
}

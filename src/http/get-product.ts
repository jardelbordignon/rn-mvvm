import { api } from './api-client'

export interface GetProductResponse {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[],
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number,
    height: number
    depth: number
  },
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  },
  images: string[],
  thumbnail: string
}

export async function getProduct(id: number) {
  return api.get(`products/${id}`).json<GetProductResponse>()
}

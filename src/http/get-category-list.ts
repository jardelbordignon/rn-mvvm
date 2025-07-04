import { api } from './api-client'

type GetCategoryListResponse = Array<string>

export async function getCategoryList() {
  return api.get('products/category-list').json<GetCategoryListResponse>()
}

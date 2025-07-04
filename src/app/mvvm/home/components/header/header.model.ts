import { useQuery } from "@tanstack/react-query"
import { getCategoryList } from "@/http/get-category-list"

export type HeaderModelReturn = ReturnType<typeof useHeaderModel>

export function useHeaderModel() {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoryList
  })

  return {
    categories: data ?? [],
  }
}
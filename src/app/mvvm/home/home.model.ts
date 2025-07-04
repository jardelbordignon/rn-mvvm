import { useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import type { GetProductResponse } from "@/http/get-product"
import { getProducts } from "@/http/get-products"

export type HomeModelReturn = ReturnType<typeof useHomeModel>

export function useHomeModel() {
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const perPage = 10

  const { data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['products', selectedCategory],
    queryFn: ({ pageParam }) => getProducts({ page: pageParam, perPage, category: selectedCategory }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _pages, lastPageParam) => {
      const nextPage = lastPageParam + 1
      const totalPages = Math.ceil(lastPage.total / perPage)

      return nextPage <= totalPages ? nextPage : undefined
    }
  })

  const products = data?.pages.flatMap(page => page.products) ?? []

  const formattedProducts = products.reduce((acc, product) => {
    const category = product.category

    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)

    return acc
  }, {} as Record<string, Array<GetProductResponse>>)

  const sections = Object.entries(formattedProducts).map(([title, data]) => ({
    title,
    data
  }))

  function handleCategoryChange(category: string) {
    setSelectedCategory(prev => prev === category ? undefined : category)
  }

  return {
    sections,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    handleCategoryChange,
    selectedCategory,
  }
}
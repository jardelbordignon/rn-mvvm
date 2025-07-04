import { ActivityIndicator, SectionList, Text, View } from "react-native"
import type { HomeModelReturn } from "./home.model"
import { ProductItem } from "./components/product-item"
import { Header } from "./components/header"

export function HomeView(props: HomeModelReturn) {
  const { 
    sections, 
    fetchNextPage, 
    isFetching, 
    hasNextPage, 
    isFetchingNextPage,
    handleCategoryChange,
    selectedCategory,
  } = props

  return (
    <SectionList 
      sections={sections}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="text-2xl text-gray-50">{title}</Text>
      )}
      renderItem={({ item }) => <ProductItem key={item.id} product={item} />}
      ListHeaderComponent={
        <Header handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      }
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage()
      }}
      onEndReachedThreshold={0.15}
      ListFooterComponent={() => (
        <View className="flex-1 h-12">
          {isFetching && <ActivityIndicator size="large" color="gray" />}
        </View>
      )}
      className="flex-1 w-full px-4 bg-gray-800"
    />
  )
}
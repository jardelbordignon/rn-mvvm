import type { GetProductResponse } from "@/http/get-product";
import { Image, Text, View } from "react-native";

interface Props {
  product: GetProductResponse
}

export function ProductItem({ product }: Props) {
  return (
    <View className="w-full flex-row items-center mt-8 ">
      <Image source={{ uri: product.thumbnail }} className="w-20 h-20 rounded" />
      <View>
        <Text className="text-2xl text-gray-50">{product.title}</Text>
        <Text className="text-sm text-gray-500">{product.description}</Text>
      </View>
    </View>
  );
}
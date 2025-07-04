import { Pressable, ScrollView, Text } from "react-native";
import type { HeaderModelReturn } from "./header.model";
import type { HeaderProps } from ".";

type Props = HeaderModelReturn & HeaderProps

export function HeaderView(props: Props) {
  const { categories, handleCategoryChange, selectedCategory } = props;

  return (
    <ScrollView horizontal className="my-2">
      {categories.map((category) => (
        <Pressable 
          key={category} 
          onPress={() => handleCategoryChange(category)}
          className={`
            py-2 px-3 rounded-md mr-2 border 
            ${selectedCategory === category ? 'border-gray-300' : 'border-gray-700'
          }`}  
        >
          <Text className="text-gray-50">{category}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
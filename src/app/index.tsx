import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-gray-900 items-center justify-center'>
      <Text className='text-gray-50'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

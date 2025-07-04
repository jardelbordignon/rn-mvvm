import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Providers } from "../providers";
import "../../global.css"

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Providers>
        <Stack screenOptions={{ headerShown: false }}>
          <StatusBar style="auto" />
          <Stack.Screen name="index" />
        </Stack>
      </Providers>
    </SafeAreaView>
  );
}
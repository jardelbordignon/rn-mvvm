import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Providers } from "../providers";
import "../../global.css"

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <StatusBar style="auto" />
        <Stack.Screen name="index" />
      </Stack>
    </Providers>
  );
}
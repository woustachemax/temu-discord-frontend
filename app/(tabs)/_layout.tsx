import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false,
        title: "Home",
    }} />
    <Stack.Screen name="ChatPage" options={{ headerShown: false,
        title: "Chat",
    }} />
  </Stack>;
}

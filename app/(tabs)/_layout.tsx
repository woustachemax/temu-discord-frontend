import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{ headerShown: false,
        title: "Home",
    }} />
  </Tabs>;
}

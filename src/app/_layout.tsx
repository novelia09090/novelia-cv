import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="about" />
      <Tabs.Screen name="skills" />
      <Tabs.Screen name="portfolio" />
      <Tabs.Screen name="academic" />
      <Tabs.Screen name="contact" />
    </Tabs>
  );
}

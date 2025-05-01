import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" options={{ title: "Profile", animation: "fade" }} />
    </Stack>
  );
};

export default Layout;

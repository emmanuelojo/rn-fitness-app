// app/index.tsx
import { useEffect, useState } from "react";
// import { router } from "expo-router";
import { Redirect, useNavigation } from "expo-router";

export default function Index() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // if (!loading) return <Redirect href="/(tabs)" />;
  if (!loading) return <Redirect href="/(onboarding)/welcome" />;

  // return null; // could show loading state if needed
}

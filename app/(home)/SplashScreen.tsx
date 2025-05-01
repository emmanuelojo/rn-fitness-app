import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ImageBackground, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import { useNavigation } from "expo-router";
import Button from "@/components/Button";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const { height } = Dimensions.get("window");

  const handlePress = () => {
    // navigation.navigate("(home)");
    navigation.navigate("Home");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // if (!loading) return <Redirect href="/(tabs)" />;
  if (!loading) return <Redirect href="/(onboarding)/welcome" />;

  return (
    <ImageBackground
      source={require("@/assets/images/onboarding.jpeg")}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <LinearGradient
        style={{ height: height / 2.5, paddingHorizontal: Spacing.padding.lg }}
        colors={[`rgba(0,0,0,0.1)`, `#000`]}
      >
        <Text
          style={{
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Font["poppins-semiBold"],
            textAlign: "center",
          }}
        >
          Stay health even if you stay at home
        </Text>
        <Text
          style={{
            fontSize: FontSize.base,
            color: Colors.text,
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing.margin.base,
            marginBottom: Spacing.margin.xxl,
          }}
        >
          Staying fit to keep you in good condition can now go through mobile apps
        </Text>

        <Button onPress={handlePress}>Get Started</Button>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#60a5fa",
  },
  logo: {
    height: 48,
    width: 48,
    objectFit: "contain",
  },
  header: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 20,
    width: "50%",
    textAlign: "center",
  },
});

export default SplashScreen;

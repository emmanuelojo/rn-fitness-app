import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import Screen from "@/components/Screen";
import Spacing from "@/constants/Spacing";
import FontSize from "@/constants/FontSize";
import Font from "@/constants/Font";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const Register = () => {
  const { width } = Dimensions.get("window");

  const handleGetStarted = () => {
    router.push("/");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={{
            height: "70%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Text entering={FadeInUp.delay(200).duration(1000).springify()} style={{ fontSize: 50 }}>
            FitFam
          </Animated.Text>
        </View>

        <View style={{ height: "30%" }}>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <Pressable onPress={handleGetStarted}>
              <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.button}>
                <Ionicons name="logo-google" size={16} style={{ color: "#ffffff" }} />
                <Text
                  style={[
                    {
                      fontSize: FontSize.base,
                      fontFamily: Font["poppins-regular"],
                      color: "white",
                    },
                  ]}
                >
                  Sign in with Google
                </Text>
              </Animated.View>
            </Pressable>

            <Pressable onPress={handleGetStarted}>
              <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.button}>
                <Ionicons name="logo-apple" size={16} style={{ color: "white" }} />

                <Text
                  style={[
                    {
                      fontSize: FontSize.base,
                      fontFamily: Font["poppins-regular"],
                      color: "white",
                    },
                  ]}
                >
                  Sign in with Apple
                </Text>
              </Animated.View>
            </Pressable>
          </View>

          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            style={{ marginTop: 40, flexDirection: "row", alignItems: "center", gap: 2, marginHorizontal: "auto" }}
          >
            <Text style={{ fontSize: 14 }}>Already have an account?</Text>
            <Link href={"/(onboarding)/login"}>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>Sign in</Text>
            </Link>
          </Animated.View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    position: "relative",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  button: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192126",
    gap: 16,
    borderRadius: 32,
    paddingHorizontal: Spacing.padding.xl,
    paddingVertical: Spacing.padding.base,
  },
});

export default Register;

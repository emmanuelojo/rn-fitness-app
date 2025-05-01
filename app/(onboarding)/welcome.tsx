import { StyleSheet, Image, View, Text, Pressable, Animated as RNAnimated, Dimensions } from "react-native";
import Screen from "@/components/Screen";
import Spacing from "@/constants/Spacing";
import FontSize from "@/constants/FontSize";
import Font from "@/constants/Font";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const WelcomeImage = require("@/assets/images/onboarding/1.png");
const OverlayImage = require("@/assets/images/onboarding/overlay.png");

const Welcome = () => {
  const animation = useRef(new RNAnimated.Value(0)).current; // Initial value is 0

  const { height } = Dimensions.get("window");

  const handleGetStarted = () => {
    router.push("/(onboarding)/login");
  };

  useEffect(() => {
    // Animate the width from 0 to 100% of the container over 5 seconds
    RNAnimated.timing(animation, {
      toValue: 1, // 1 means 100% width
      duration: 5000, // 5 seconds
      useNativeDriver: false, // Since we are animating width, not transform
    }).start();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          source={WelcomeImage}
          style={{
            width: "100%",
            height: height < 800 ? "50%" : "67%",
          }}
        />

        <Image source={OverlayImage} style={styles.overlayImage} />

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            width: "100%",
            height: height < 800 ? "50%" : "33%",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 24,
            paddingTop: 24,
          }}
        >
          <View style={styles.ctaTextContainer}>
            <Animated.Text entering={FadeInUp.delay(200).duration(1000).springify()} style={styles.title}>
              Wherever you are health is number one
            </Animated.Text>
            <Animated.Text entering={FadeInUp.delay(400).duration(1000).springify()} style={styles.description}>
              There is no instant way to healthy life
            </Animated.Text>

            <Animated.View entering={FadeInDown.delay(200)} style={styles.loadingBarWrapper}>
              <RNAnimated.View
                style={[
                  styles.loadingBar,
                  { width: animation.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                ]}
              />
            </Animated.View>
          </View>

          {/* <Link href="/"> */}
          <Pressable onPress={handleGetStarted}>
            <Animated.View entering={FadeInDown.delay(400).springify()} style={styles.button}>
              <Text
                style={[
                  {
                    fontSize: FontSize.base,
                    fontFamily: Font["poppins-regular"],
                    color: "white",
                  },
                ]}
              >
                Get started
              </Text>
            </Animated.View>
          </Pressable>
          {/* </Link> */}
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
    justifyContent: "space-between",
    position: "relative",
  },
  image: {
    // width: "100%",
    // height:  "67%",
  },
  overlayImage: {
    width: "100%",
    height: 190,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-20%)",
  },
  ctaContainer: {
    // flexDirection: "column",
    // gap: 10,
    // justifyContent: "space-between",
    // backgroundColor: "#ffffff",
    // width: "100%",
    // height: "33%",
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingBottom: 24,
    // paddingTop: 24,
  },
  ctaTextContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 24,
  },
  title: {
    width: 270,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    color: "#192126",
    fontWeight: "900",
    fontSize: 24,
    fontFamily: "Inter_800ExtraBold",
    textTransform: "capitalize",
  },
  description: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    color: "rgba(25,33,38,0.5)",
    fontWeight: "400",
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  loadingBarWrapper: {
    marginTop: 40,
    marginHorizontal: "auto",
    width: 65,
    height: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#192126",
    paddingHorizontal: 2,
  },
  loadingBar: {
    height: 3,
    borderRadius: 5,
    backgroundColor: "#BBF246",
  },
  button: {
    width: "100%",
    height: 56,
    backgroundColor: "#192126",
    borderRadius: 32,
    paddingHorizontal: Spacing.padding.xl,
    paddingVertical: Spacing.padding.base,
    alignItems: "center",
  },
});

export default Welcome;

import { Image, Platform, ScrollView, StyleSheet, useWindowDimensions, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import AppText from "@/components/AppText";
import IconButton from "@/components/IconButton";
import Button from "@/components/Button";
import Spacing from "@/constants/Spacing";
import { BlurView } from "expo-blur";
import Font from "@/constants/Font";
import { LinearGradient } from "expo-linear-gradient";
import Screen from "@/components/Screen";
import { workouts } from "@/data";
import WorkoutExercise from "@/components/workout/WorkoutExercise";
import { FireIcon } from "@/assets/icons/FireIcon";
import Colors from "@/constants/Colors";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import Animated, { FadeInDown } from "react-native-reanimated";

const OverlayImage = require("@/assets/images/onboarding/overlay.png");

const ExerciseDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const windowWidth = useWindowDimensions().width;
  const [dynamicWidth, setDynamicWidth] = useState(windowWidth);

  const workout = workouts.filter((el) => el.id === Number(id))[0];

  const goBack = () => {
    router.push("/");
  };

  useEffect(() => {
    setDynamicWidth(windowWidth);
  }, [windowWidth]);

  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
          paddingTop: Spacing.padding.base,
          backgroundColor: "#192126",
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: Spacing.padding.base,
            justifyContent: "center",
          }}
        >
          <IconButton
            onPress={goBack}
            style={{
              position: "absolute",
              left: 0,
            }}
            color="#192126"
            name="chevron-left"
          />
          <AppText style={{ color: "white" }}>Workout</AppText>
        </View>

        <View
          style={{
            position: "relative",
            marginTop: 40,
            width: dynamicWidth - Spacing.padding.base * 2,
          }}
        >
          <Image
            source={workout.image}
            style={{
              width: "auto",
              height: 250,
              borderRadius: 20,
              objectFit: "cover",
            }}
          ></Image>

          <Image
            source={OverlayImage}
            style={{
              width: "100%",
              height: 134,
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translate(-50%,0%)",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              opacity: 0.5,
            }}
          />

          <BlurView tint="dark" intensity={Platform.OS === "android" ? 100 : 80} style={styles.workoutSummary}>
            <View style={styles.workoutTimeWrapper}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: Colors.green,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: Spacing.borderRadius.base,
                }}
              >
                <ClockIcon size={20} />
              </View>

              <View>
                <AppText style={styles.workoutIconTitle}>Time</AppText>
                <AppText style={styles.workoutIconText}>20 mins</AppText>
              </View>
            </View>

            <View style={styles.verticalDivider}></View>

            <View style={styles.workoutTimeWrapper}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: Colors.green,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: Spacing.borderRadius.base,
                }}
              >
                <FireIcon size={20} />
              </View>

              <View>
                <AppText style={styles.workoutIconTitle}>Burn</AppText>
                <AppText style={styles.workoutIconText}>95 kCal</AppText>
              </View>
            </View>
          </BlurView>
        </View>

        <View style={{ marginTop: 60, flexDirection: "column", gap: 16 }}>
          <AppText
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              textTransform: "capitalize",
              fontFamily: "Inter_600SemiBold",
            }}
          >
            {workout.name}
          </AppText>
          <AppText style={{ color: "#FFFFFF50", fontSize: 14 }}>{workout.description}</AppText>
        </View>

        <View style={{ marginTop: 40, flexDirection: "column", gap: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <AppText style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 700 }}>Rounds</AppText>

            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <AppText style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 500 }}>1</AppText>
              <AppText style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 500 }}>/8</AppText>
            </View>
          </View>

          <View style={{ flexDirection: "column", gap: 16, marginBottom: 100 }}>
            {workout.exercises.map((exercise) => (
              <WorkoutExercise key={exercise.id} exercise={exercise} />
            ))}
          </View>
        </View>
      </ScrollView>

      <LinearGradient
        style={{
          position: "absolute",
          width: "100%",
          paddingBottom: Spacing.padding.lg,
          paddingTop: Spacing.padding.sm,
          bottom: 0,
          paddingHorizontal: Spacing.padding.base,
        }}
        colors={[`rgba(0,0,0,0)`, "black"]}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}>
          <Button style={{ borderRadius: 32 }}>Let's Workout</Button>
        </Animated.View>
      </LinearGradient>
    </Screen>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({
  workoutSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto", // 258,
    height: 64,
    padding: 16,
    gap: 30,
    position: "absolute",
    bottom: -32,
    top: "50%",
    left: "50%",
    transform: "translate(-50%,150%)",
    borderWidth: 1,
    borderColor: "#19212630",
    borderRadius: 16,
  },
  workoutTimeWrapper: {
    width: 84,
    height: 32,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  workoutIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#BBF246",
    borderRadius: 5,
  },
  workoutIconTitle: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  workoutIconText: {
    color: "#BBF246",
    fontSize: 12,
  },
  verticalDivider: {
    width: 1,
    height: 32,
    backgroundColor: "#FFFFFF",
  },
});

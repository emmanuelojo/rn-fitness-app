import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Font from "@/constants/Font";
import Spacing from "@/constants/Spacing";
import Colors from "@/constants/Colors";
import { Workout as WorkoutType } from "@/data";
import { ImageBackground } from "expo-image";
import AppText from "../AppText";
import { FireIcon } from "@/assets/icons/FireIcon";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { useRouter } from "expo-router";

interface Props {
  workout: WorkoutType;
  onPress?: (id: number) => void;
}

const PopularWorkout = ({ workout, onPress }: Props) => {
  const router = useRouter();

  const handlePress = () => {
    // if (onPress) onPress(workout.id);
    router.push(`/exercises/${workout.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: Colors.primary,
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={workout.image}
        style={{
          width: 270,
          height: 174,
          minHeight: 174,
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "60%",
              height: "100%",
              flexDirection: "column",
              gap: 14,
              justifyContent: "space-between",
            }}
          >
            <AppText style={{ fontWeight: "700", fontFamily: "Inter_700Bold", fontSize: 24, color: "#ffffff" }}>
              {workout.name}
            </AppText>

            <View style={{ flexDirection: "column", gap: 10 }}>
              <View style={styles.transparentWrapper}>
                <FireIcon />

                <AppText style={styles.transparentText}>{workout.calories} Kcal</AppText>
              </View>

              <View style={styles.transparentWrapper}>
                <ClockIcon />

                <AppText style={styles.transparentText}>{workout.minutes} mins</AppText>
              </View>
            </View>
          </View>
          <View
            style={{
              minWidth: 38,
              width: 38,
              height: 38,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#BBF246",
              borderRadius: "50%",
            }}
          >
            <PlayIcon />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  transparentWrapper: {
    // width: "auto",
    height: 26,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 9,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  transparentText: {
    color: "#192126",
    fontSize: 12,
  },
});

export default PopularWorkout;

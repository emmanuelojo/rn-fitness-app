import { ImageBackground, Platform, ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import AppText from "@/components/AppText";
import IconButton from "@/components/IconButton";
import Spacing from "@/constants/Spacing";
import { BlurView } from "expo-blur";
import Font from "@/constants/Font";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import Screen from "@/components/Screen";
import { workouts } from "@/data";
import WorkoutExercise from "@/components/workout/WorkoutExercise";

const ExerciseDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const workout = workouts.filter((el) => el.id === Number(id))[0];

  const goBack = () => {
    router.push("/(tabs)");
  };

  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: Spacing.padding.base,
            justifyContent: "center",
          }}
        >
          {/* <IconButton
            onPress={goBack}
            style={{
              position: "absolute",
              left: 0,
            }}
            name="chevron-back"
          /> */}
          <AppText>Plan Overview</AppText>
        </View>
        <ImageBackground
          source={workout.image}
          resizeMode="cover"
          style={{
            height: 250,
            marginVertical: Spacing.margin.lg,
            borderRadius: Spacing.borderRadius.base,
            overflow: "hidden",
            justifyContent: "space-between",
            paddingVertical: Spacing.padding.base,
          }}
        >
          <View
            style={{
              paddingHorizontal: Spacing.padding.base,
              alignItems: "flex-end",
            }}
          >
            {/* <IconButton
              name="bookmark-outline"
              style={{
                backgroundColor: Colors.primary,
                borderWidth: 0,
              }}
            /> */}
          </View>
          <View
            style={{
              borderRadius: Spacing.borderRadius.base,
              overflow: "hidden",
              marginHorizontal: Spacing.margin.lg,
            }}
          >
            <BlurView
              tint="dark"
              intensity={Platform.OS === "android" ? 100 : 80}
              style={{
                padding: Spacing.padding.base,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.accent,
                    marginRight: Spacing.margin.base,
                  }}
                >
                  {workout.minutes}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  minutes
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.accent,
                    marginRight: Spacing.margin.base,
                  }}
                >
                  {workout.calories}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  calories
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.accent,
                    marginRight: Spacing.margin.base,
                  }}
                >
                  {workout.exercises.length}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  exercises
                </AppText>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AppText
            style={{
              fontSize: FontSize.lg,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            {workout.name}
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="star" size={20} color={Colors.yellow} />
            <AppText
              style={{
                marginLeft: Spacing.margin.sm,
              }}
            >
              {workout.rating}
            </AppText>
          </View>
        </View>
        <AppText
          style={{
            marginTop: Spacing.margin.sm,
          }}
        >
          {workout.coach}
        </AppText>
        <AppText
          style={{
            marginTop: Spacing.margin.base,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          Description
        </AppText>
        <AppText
          numberOfLines={3}
          style={{
            marginTop: Spacing.margin.sm,
            fontFamily: Font["poppins-regular"],
          }}
        >
          {workout.description}
        </AppText>
        <AppText
          style={{
            marginVertical: Spacing.margin.base,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          Exercises ({workout.exercises.length})
        </AppText>

        {workout.exercises.map((exercise) => (
          <WorkoutExercise key={exercise.id} exercise={exercise} />
        ))}
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
        <Button>Start Workout</Button>
      </LinearGradient>
    </Screen>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({});

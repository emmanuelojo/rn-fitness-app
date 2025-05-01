import { Image, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import { Link, useRouter } from "expo-router";
import Screen from "@/components/Screen";
import { bestForYou, categories, challenges, todayPlans, user, warmUps, workoutPlans, workouts } from "@/data";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import AppText from "@/components/AppText";
import Spacing from "@/constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import SectionHeader from "@/components/SectionHeader";
import BestForYou from "@/components/explore/BestForYou";
import ChallengeCard from "@/components/explore/ChallengeCard";

const Explore = () => {
  const dynamicWidth = useWindowDimensions().width;

  const evenIndexedBestForYouItems = bestForYou.filter((_, index) => index % 2 === 0);
  const oddIndexedBestForYouItems = bestForYou.filter((_, index) => index % 2 !== 0);

  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
          paddingTop: Spacing.padding.base,
          paddingBottom: 80,
          gap: 24,
        }}
      >
        <View
          style={{
            position: "relative",
            width: dynamicWidth - Spacing.padding.base * 2,
            height: 180,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("@/assets/images/workouts/home-workout.jpg")}
            style={{ flex: 1, width: "auto", height: "auto", borderRadius: 20, objectFit: "cover" }}
          ></Image>

          <AppText
            style={{
              maxWidth: 210,
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 600,
              position: "absolute",
              top: "15%",
              left: "10%",
              transform: "translate(-10%,-15%)",
            }}
          >
            Best Home Workouts
          </AppText>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              cursor: "pointer",
              position: "absolute",
              bottom: "10%",
              left: "7%",
              transform: "translate(-10%,-10%)",
            }}
          >
            <AppText style={{ color: Colors.green }}>See more</AppText>

            <Ionicons name="chevron-forward" color={Colors.green} />
          </View>
        </View>

        <View>
          <SectionHeader title="Best for you" showSeeAll={false} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={270 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {evenIndexedBestForYouItems.map((workout, index) => (
              <BestForYou workout={workout} key={workout.id} />
            ))}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={270 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {oddIndexedBestForYouItems.map((workout) => (
              <BestForYou workout={workout} key={workout.id} />
            ))}
          </ScrollView>
        </View>

        <View>
          <SectionHeader title="Challenge" showSeeAll={false} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={110 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {challenges.map((challenge) => (
              <ChallengeCard challenge={challenge} key={challenge.id} />
            ))}
          </ScrollView>
        </View>

        <View>
          <SectionHeader title="Fast Warmups" showSeeAll={false} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={110 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {warmUps.map((warmup) => (
              <BestForYou workout={warmup} key={warmup.id} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Explore;

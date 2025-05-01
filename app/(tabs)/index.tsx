import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { todayPlans, user, workouts } from "@/data";
import Screen from "@/components/Screen";
import IconButton from "@/components/IconButton";
import SectionHeader from "@/components/SectionHeader";
import SearchField from "@/components/home/SearchField";
import PopularWorkout from "@/components/home/PopularWorkout";
import TodaysPlan from "@/components/home/TodaysPlan";
import AppText from "@/components/AppText";

export default function HomeScreen() {
  const router = useRouter();

  const viewDetails = (id: number) => {
    router.push(`/exercises/${id}`);
  };

  return (
    <Screen>
      <ScrollView className="px-4 pt-4 pb-20">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <View className="ml-4">
              <AppText style={{ fontFamily: "Inter_400Regular" }}>Good morning, </AppText>
              <AppText
                style={{
                  fontFamily: "Inter_700Bold",
                  textTransform: "capitalize",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                {user.name}
              </AppText>
              <Text className="text-blue-500">Jekon</Text>
            </View>
          </View>
          <IconButton name="bell" color="black" />
        </View>

        <SearchField />

        <SectionHeader title="Popular Workouts" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          pagingEnabled
          snapToInterval={270 + 18}
          style={{ marginBottom: 20 }}
        >
          {workouts.map((workout) => (
            <PopularWorkout onPress={viewDetails} workout={workout} key={workout.id} />
          ))}
        </ScrollView>

        <SectionHeader title="Today's Plan" />

        <View style={{ flexDirection: "column", gap: 20, paddingBottom: 100 }}>
          {todayPlans.map((plan) => (
            <TodaysPlan onPress={viewDetails} plan={plan} key={plan.id} />
          ))}
        </View>

        {/* <SectionHeader title="Trending Plans" />
        {workoutPlans.map((plan) => (
          <WorkOutPlan plan={plan} key={plan.id} />
        ))} */}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  divider: {
    height: 5,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: "100px",
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: "12px",
    paddingHorizontal: 8,
  },
  popularDestinations: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
  },
  viewAll: {
    color: "#3b82f6",
  },
  destinations: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    overflowX: "scroll",
    // scrollbar hide
  },
  destinationTab: {
    backgroundColor: "#000000",
    width: "auto",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 5,
    marginTop: 5,
  },
  destinationTabText: {
    color: "white",
    cursor: "pointer",
  },
  destination: {
    height: 384,
    width: 240,
    backgroundColor: "#d1d5db",
    marginRight: 12,
    marginTop: 12,
    borderRadius: 12,
    position: "relative",
  },
  destinationImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    zIndex: 10,
  },
  destinationTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00000055",
    zIndex: 11,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  destinationCountry: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 8,
    color: "#ffffff",
  },
  destinationContinentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  destinationContinent: {
    color: "#ffffff",
  },
});

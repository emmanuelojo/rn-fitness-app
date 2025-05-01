import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import Font from "@/constants/Font";
// import Spacing from "@/constants/Spacing";
// import Colors from "@/constants/Colors";
import { TodaysPlan as TodaysPlanType } from "@/data";
import AppText from "../AppText";
import ProgressBar from "./ProgressBar";
import PlanLevel from "./PlanLevel";

interface Props {
  plan: TodaysPlanType;
  onPress?: (id: number) => void;
}

const TodaysPlan = ({ plan, onPress }: Props) => {
  const { width } = Dimensions.get("window");

  const handlePress = () => {
    // if (onPress) onPress(plan.id);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        borderRadius: 16, //Spacing.borderRadius.base,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: width - 20,
          height: 120,
          backgroundColor: "#ffffff",
          borderRadius: 23,
          padding: 10,
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image source={plan.image} style={{ width: 100, height: 100, borderRadius: 12, objectFit: "cover" }} />

        <View style={{ position: "absolute", top: 0, right: 20 }}>
          <PlanLevel level={plan.level} />
        </View>

        <View style={{ flex: 1, flexDirection: "column", gap: 14, paddingRight: 20 }}>
          <View>
            <AppText style={{ textTransform: "capitalize" }}>{plan.name}</AppText>

            <AppText style={{ color: "rgba(25,33,38,.5)", fontSize: 12 }}>{plan.description}</AppText>
          </View>

          {/* percent={plan.progress} */}
          <ProgressBar percent={plan.progress} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodaysPlan;

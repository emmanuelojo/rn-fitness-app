import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import AppText from "../AppText";
import { BestForYou as BestForYouType } from "@/data";
import Spacing from "@/constants/Spacing";

interface Props {
  workout: BestForYouType;
}

const BestForYou = ({ workout }: Props) => {
  const handlePress = () => {
    // if (onPress) onPress(plan.id);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        marginRight: Spacing.margin.lg,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: 194,
          height: 86,
          backgroundColor: "#ffffff",
          borderRadius: 8,
          padding: 8,
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image source={workout.image} style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover" }} />

        <View style={{ flexDirection: "column", gap: 14, paddingRight: 20 }}>
          <AppText style={{ maxWidth: 90, fontSize: 11, fontWeight: 600 }}>{workout.name}</AppText>

          <View style={{ flexDirection: "column", gap: 8 }}>
            <View style={styles.durationWrapper}>
              <AppText style={styles.wrapperText}>{workout.duration}</AppText>
            </View>
            <View style={styles.wrapper}>
              <AppText style={styles.wrapperText}>{workout.level}</AppText>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "auto",
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#F1F1F1",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  wrapperText: {
    fontSize: 12,
    color: "rgba(25,33,38,.7)",
  },
  durationWrapper: {
    width: "auto",
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#F1F1F1",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
});
export default BestForYou;

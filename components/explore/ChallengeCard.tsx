import { View, Text, TouchableOpacity, Image } from "react-native";
import { Challenge as ChallengeType } from "@/data";
import Spacing from "@/constants/Spacing";

interface Props {
  challenge: ChallengeType;
}
const ChallengeCard = ({ challenge }: Props) => {
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
          position: "relative",
          flexDirection: "row",
          width: 110,
          height: 110,
          backgroundColor: challenge.bgColour,
          borderRadius: 9,
        }}
      >
        <Text
          style={{
            position: "absolute",
            left: 10,
            bottom: 10,
            width: 60,
            color: challenge.textColour,
            fontSize: 12,
            fontWeight: 600,
            zIndex: 5,
            fontFamily: "Inter_400Regular",
          }}
        >
          {challenge.name}
        </Text>

        <View
          style={{
            position: "absolute",
            right: 10,
            bottom: 10,
            zIndex: 1,
            width: 72,
            height: 72,
          }}
        >
          {/* <span>{challenge.icon}</span> */}
          <Image source={challenge.image} style={{ width: 72, height: 72, borderRadius: 9, objectFit: "contain" }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChallengeCard;

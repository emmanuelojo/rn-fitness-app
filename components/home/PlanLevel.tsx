import { useEffect, useState } from "react";
import { View } from "react-native";
import AppText from "../AppText";
// import Colors from "@/constants/Colors";

interface Props {
  level: number;
}

const PlanLevel = ({ level }: Props) => {
  const [currentLevel, setCurrentLevel] = useState("");

  useEffect(() => {
    if (level === 1) {
      setCurrentLevel("beginner");
    } else if (level === 2) {
      setCurrentLevel("intermediate");
    } else {
      setCurrentLevel("pro");
    }
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#192126", //Colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
      }}
    >
      <AppText style={{ color: "#ffffff", fontSize: 10, textTransform: "capitalize" }}>{currentLevel}</AppText>
    </View>
  );
};

export default PlanLevel;

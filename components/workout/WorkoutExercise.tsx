import { Image, TouchableOpacity, View, Dimensions } from "react-native";
import Colors from "@/constants/Colors";
import { Exercise } from "@/data";
import AppText from "../AppText";
import Font from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  exercise: Exercise;
}

const WorkoutExercise = ({ exercise }: Props) => {
  const { width } = Dimensions.get("window");

  return (
    <TouchableOpacity
      style={{
        height: 74,
        width: "100%",
        backgroundColor: "#384046",
        borderRadius: 16,
        padding: 8,
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 8,
        position: "relative",
      }}
    >
      <Image
        source={exercise.image}
        style={{
          width: 58,
          height: 58,
          borderRadius: 8,
        }}
      />

      <View
        style={{
          width: width < 500 ? "74%" : "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <View style={{ flexDirection: "column", gap: 8 }}>
          <AppText
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter_400Regular",
              textAlign: "left",
            }}
          >
            {exercise.name}
          </AppText>

          <AppText
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 13,
              color: "#FFFFFF50",
              textAlign: "left",
            }}
          >
            {exercise.time}
          </AppText>
        </View>

        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#192126",
          }}
        >
          <Ionicons name="play" size={16} color={Colors.accent} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutExercise;

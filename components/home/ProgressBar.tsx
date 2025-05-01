import { View } from "react-native";
import AppText from "../AppText";

interface Props {
  percent: number;
}

const ProgressBar = ({ percent }: Props) => {
  const progressWidth = Math.min(Math.max(percent, 0), 100);

  return (
    <View
      style={{
        width: "100%",
        height: 16,
        backgroundColor: "#f2f2f2",
        borderRadius: 3,
        position: "relative",
        alignContent: "center",
      }}
    >
      {progressWidth > 0 && (
        <View
          style={{
            width: `${progressWidth}%`,
            height: "97%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 4,
            backgroundColor: "#bbf246",
            borderRadius: 3,
          }}
        >
          {progressWidth > 19 && <AppText style={{ fontSize: 8 }}>{progressWidth}%</AppText>}
        </View>
      )}
    </View>
  );
};

export default ProgressBar;

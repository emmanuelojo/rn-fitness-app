import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  name: keyof typeof Feather.glyphMap; // keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

const IconButton = ({ style, size = 24, color = "#8B8F92", name, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 40,
          width: 40,
          backgroundColor: "#BBF246",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        },
        style,
      ]}
    >
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

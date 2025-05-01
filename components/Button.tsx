import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import Colors from "@/constants/Colors";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Button = ({ style, children, textStyle, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: Colors.accent,
          paddingHorizontal: Spacing.padding.xl,
          paddingVertical: Spacing.padding.base,
          borderRadius: Spacing.borderRadius.base,
          alignItems: "center",
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            fontSize: FontSize.base,
            fontFamily: "Inter_400Regular",
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});

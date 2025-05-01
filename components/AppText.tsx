import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

const AppText = ({ children, style, ...OtherProps }: Props) => {
  return (
    <Text
      style={[
        {
          color: "#192126",
          fontFamily: "Inter_400Regular",
          fontSize: 16,
        },
        style,
      ]}
      {...OtherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;

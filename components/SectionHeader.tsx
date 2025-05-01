import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// import FontSize from "../constants/FontSize";
// import Spacing from "../constants/Spacing";
import AppText from "./AppText";
// import Colors from "../constants/Colors";
import { Link } from "expo-router";

interface Props {
  title?: string;
  link?: string;
  showSeeAll?: boolean;
}

const SectionHeader = ({ title, link, showSeeAll = true }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 14,
      }}
    >
      <AppText style={{ color: "black", fontFamily: "Inter_500Medium" }}>{title}</AppText>
      {showSeeAll && (
        <TouchableOpacity>
          {/* <Link href={link}> */}
          <AppText
            style={{
              fontSize: 12,
              fontFamily: "Inter_300Light",
              color: "black",
            }}
          >
            See all
          </AppText>
          {/* </Link> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});

import { Platform, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Button from "@/components/Button";
import ImageViewer from "../ImageViewer";
import { BlurView } from "expo-blur";
import Spacing from "@/constants/Spacing";
import BottomModal from "../modals/BottomModal";
import { Image, type ImageSource } from "expo-image";

interface Props {
  imgSource: ImageSource;
  selectedImage?: string;
}

const AccountProfile = ({ imgSource, selectedImage }: Props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={imgSource} selectedImage={selectedImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "100%",
  },
  buttonsContainer: {
    height: "100%",
    // flex: 1 / 3,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  edit: {
    // flex: 1 / 3,
    // alignItems: "center",
    padding: 4,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default AccountProfile;

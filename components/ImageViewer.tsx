import { Pressable, StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  onPress?: () => void;
};

export default function ImageViewer({ imgSource, selectedImage, onPress }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <Pressable onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: "100%",
  },
});

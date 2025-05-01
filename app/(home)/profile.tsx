import { GestureResponderEvent, Pressable, ScrollView, StyleSheet, TextInput, View, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Screen from "@/components/Screen";
import AppText from "@/components/AppText";
import IconButton from "@/components/IconButton";
import Spacing from "@/constants/Spacing";
import AccountProfile from "@/components/profile/AccountProfile";
import BottomModal from "@/components/modals/BottomModal";
import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";

const PlaceholderImage = require("@/assets/images/placeholder.png");

const Profile = () => {
  const router = useRouter();
  const { height } = Dimensions.get("window");
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onModalClose();
    }
  };

  const goBack = () => {
    router.back();
  };

  const handleOpenImageModal = () => {
    setIsModalVisible(true);
  };

  const onModalClose = (e?: GestureResponderEvent) => {
    console.log("target: ", e?.target);
    console.log("curr target: ", e?.currentTarget);

    if (e?.target === e?.currentTarget) {
      console.log("close modal");
      setIsModalVisible(false);
    } else {
      console.log("just close modal");
      setIsModalVisible(false);
    }
  };

  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
          paddingVertical: Spacing.padding.base,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: Spacing.padding.base,
            justifyContent: "center",
          }}
        >
          <IconButton
            onPress={goBack}
            style={{
              position: "absolute",
              left: 0,
            }}
            name="chevron-left"
          />

          <View style={{ flexDirection: "row", alignContent: "center" }}>
            <AppText style={{ color: "black" }}>Profile </AppText>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            height: height / 2.5,
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <View style={{ flexDirection: "column", gap: 8 }}>
            <AccountProfile imgSource={PlaceholderImage} selectedImage={selectedImage} />
            <Pressable onPress={handleOpenImageModal}>
              <AppText style={{ color: "black", textAlign: "center", fontSize: 12, textDecorationLine: "underline" }}>
                Tap to edit
              </AppText>
            </Pressable>
          </View>

          <View
            style={{
              height: "100%",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 30,
            }}
          >
            <View style={{ flexDirection: "column", gap: 16 }}>
              <View style={{ flexDirection: "column", gap: 4 }}>
                <AppText style={{ color: "black" }}>First name</AppText>
                <TextInput
                  placeholder="John"
                  placeholderTextColor="#DDDDDD"
                  style={{
                    fontSize: FontSize.base,
                    width: "100%",
                    outline: "none",
                    backgroundColor: "transpareent",
                    paddingVertical: Spacing.padding.sm,
                    paddingHorizontal: Spacing.padding.base,
                    borderColor: "#DDDDDD",
                    borderWidth: 1,
                    borderRadius: Spacing.borderRadius.base,
                    color: "#000000",
                  }}
                />
              </View>
              <View style={{ flexDirection: "column", gap: 4 }}>
                <AppText style={{ color: "black" }}>Last name</AppText>
                <TextInput
                  placeholder="Doe"
                  placeholderTextColor="#DDDDDD"
                  style={{
                    fontSize: FontSize.base,
                    width: "100%",
                    outline: "none",
                    backgroundColor: "transpareent",
                    paddingVertical: Spacing.padding.sm,
                    paddingHorizontal: Spacing.padding.base,
                    borderColor: "#DDDDDD",
                    borderWidth: 1,
                    borderRadius: Spacing.borderRadius.base,
                    color: "#000000",
                  }}
                />
              </View>
              <View style={{ flexDirection: "column", gap: 4 }}>
                <AppText style={{ color: "black" }}>Email address</AppText>
                <TextInput
                  placeholder="mail@doe.com"
                  placeholderTextColor="#DDDDDD"
                  style={{
                    fontSize: FontSize.base,
                    width: "100%",
                    outline: "none",
                    backgroundColor: "transpareent",
                    paddingVertical: Spacing.padding.sm,
                    paddingHorizontal: Spacing.padding.base,
                    borderColor: "#DDDDDD",
                    borderWidth: 1,
                    borderRadius: Spacing.borderRadius.base,
                    color: "#000000",
                  }}
                />
              </View>
              <View style={{ flexDirection: "column", gap: 4 }}>
                <AppText style={{ color: "black" }}>Phone number</AppText>
                <TextInput
                  placeholderTextColor="#DDDDDD"
                  style={{
                    fontSize: FontSize.base,
                    width: "100%",
                    outline: "none",
                    backgroundColor: "transpareent",
                    paddingVertical: Spacing.padding.sm,
                    paddingHorizontal: Spacing.padding.base,
                    borderColor: "#DDDDDD",
                    borderWidth: 1,
                    borderRadius: Spacing.borderRadius.base,
                    color: "#000000",
                  }}
                />
              </View>
            </View>

            <Button style={{ alignContent: "center" }}>Save change</Button>
          </View>
        </View>
      </ScrollView>

      <BottomModal isVisible={isModalVisible} onClose={onModalClose}>
        <View style={styles.buttonsContainer}>
          <Button onPress={pickImageAsync} style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="image" size={16} style={{ marginRight: 4 }} />

            <AppText>Choose a photo</AppText>
          </Button>
          {/* <Button label="Use this photo" /> */}
        </View>
      </BottomModal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    height: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;

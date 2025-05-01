import { Modal, View, StyleSheet, TouchableWithoutFeedback, GestureResponderEvent } from "react-native";
import { PropsWithChildren } from "react";
import { Feather } from "@expo/vector-icons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: (e: GestureResponderEvent) => void;
}>;

export default function BottomModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="pageSheet"
      transparent={true}
      visible={isVisible}
    >
      <TouchableWithoutFeedback onPress={(e) => onClose(e)}>
        <View style={styles.modalContent}>
          <View
            style={{
              width: "auto",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              padding: 10,
              marginRight: 10,
            }}
          >
            <Feather name="x" color={"white"} onPress={(e) => onClose(e)} />
          </View>

          {children}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "auto",
    minHeight: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
});

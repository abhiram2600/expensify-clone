import React from "react";
import { View, Text } from "@/components";
import { Button } from "react-native";
import { modalTypeState, useAppStore } from "@/store/AppStore";
import Modal from "react-native-modal";
import { colors } from "@/constants/colors";

interface GenericModalProps {}

export const GenericModal: React.FC<GenericModalProps> = () => {
  const modalState = useAppStore((state) => state.modalState);
  const changeModalState = useAppStore((state) => state.changeModalState);

  const closeModal = () => {
    changeModalState({ isVisible: false, type: modalTypeState.NONE });
  };

  return (
    <Modal
      isVisible={modalState.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ margin: 0 }}
      backdropColor={colors.LIGHT_GREEN}
      backdropOpacity={0.7}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
    >
      <View
        style={{
          maxHeight: "50%",
          minHeight: "30%",
          marginTop: "auto",
          width: "100%",
          backgroundColor: colors["DARK"].BACKGROUND,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 20,
        }}
      >
        <Text>hello</Text>
      </View>
    </Modal>
  );
};

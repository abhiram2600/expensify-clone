import React from "react";
import { View, Text } from "@/components";
import { Button } from "react-native";
import { modalTypeState, useAppStore } from "@/store/AppStore";
import Modal from "react-native-modal";
import { colors } from "@/constants/colors";
import { AddExpensesModalContent } from "./modal-content/AddExpensesModalContent";

interface GenericModalProps {}

export const GenericModal: React.FC<GenericModalProps> = () => {
  const modalState = useAppStore((state) => state.modalState);
  const changeModalState = useAppStore((state) => state.changeModalState);
  const Content = (() => {
    switch (modalState.type) {
      case modalTypeState.PICKERFILTER:
        return AddExpensesModalContent;
      case modalTypeState.PLUSBUTTON:
        return AddExpensesModalContent;
      default:
        return () => <View />;
    }
  })();

  const closeModal = () => {
    changeModalState({ isVisible: false, type: modalTypeState.NONE });
  };

  return (
    <Modal
      isVisible={modalState.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ margin: 0 }}
      backdropColor={colors.LIGHT_GREEN_3}
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
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
        }}
      >
        <Content />
      </View>
    </Modal>
  );
};

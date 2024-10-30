import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components";

interface ReceiptImageProps {}

export const ReceiptImage: React.FC<ReceiptImageProps> = () => {
  return (
    <>
      <Text>Receipt</Text>
      <View style={styles.receiptImg} />
    </>
  );
};

const styles = StyleSheet.create({
  receiptImg: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
    borderRadius: 20,
    marginBottom: 20,
  },
});

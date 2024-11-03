import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "@/components";

interface ReceiptImageProps {}

export const ReceiptImage: React.FC<ReceiptImageProps> = () => {
  return (
    <View>
      <Text style={styles.text}>Receipt</Text>
      <View style={styles.receiptImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
  },
  receiptImg: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
    borderRadius: 20,
  },
});

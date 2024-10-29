import { Text } from "@/components/Text";
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import GenericDIcon from "@/assets/images/icons/generic-document.svg";
import { CustomView } from "@/components/CustomView";
import { colors } from "@/constants/colors";
import { ledgerItems } from "../data";
import GenericProfile from "@/assets/images/icons/generic-profile.svg";

interface LedgerItemsProps {}

const LedgerItem = () => {
  return (
    <Pressable style={styles.ledgerItem}>
      <CustomView.Row style={styles.participantsContainer}>
        <GenericProfile height={17} width={17} />
        <Text>abhi</Text>
        <Text>{` -> `}</Text>
        <Text>abhi</Text>
      </CustomView.Row>
      <CustomView.Row style={styles.detailsContainer}>
        <GenericDIcon height={40} width={40} />
        <View style={styles.nameAndCategory}>
          <Text>name</Text>
          {true && <Text>category</Text>}
        </View>
        <View style={styles.priceContainer}>
          <Text>4100</Text>
          <Text>oct 28</Text>
        </View>
      </CustomView.Row>
    </Pressable>
  );
};

export const LedgerItems: React.FC<LedgerItemsProps> = () => {
  return ledgerItems.map((item) => {
    return <LedgerItem key={item.id} />;
  });
};

const styles = StyleSheet.create({
  ledgerItem: {
    width: "100%",
    backgroundColor: colors.LIGHT_GREEN,
    padding: 10,
    borderRadius: 7,
    marginTop: 20,
  },
  participantsContainer: {
    gap: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  detailsContainer: {
    alignItems: "center",
    height: 40,
  },
  nameAndCategory: {
    marginLeft: 10,
  },
  priceContainer: {
    marginLeft: "auto",
  },
});

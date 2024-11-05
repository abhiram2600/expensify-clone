import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { status } from "../../../../constants/data";
import { LedgerItem } from "./LedgerItem";
import { useAppStore } from "@/store/AppStore";
import { constants } from "@/constants/constants";
import { View } from "@/components";

interface LedgerItemsProps {
  currentStatus: status;
}

export const LedgerItems: React.FC<LedgerItemsProps> = ({ currentStatus }) => {
  const data = useAppStore((state) => state.data);
  const [currentLedgerItems, setCurrentLedgerItems] = useState(data);

  useEffect(() => {
    if (currentStatus === status.ALL) {
      setCurrentLedgerItems(data);
    } else {
      const newData = data.filter(({ status }) => status === currentStatus);
      setCurrentLedgerItems(newData);
    }
  }, [currentStatus, data]);

  return (
    <FlatList
      data={currentLedgerItems}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <LedgerItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      extraData={currentStatus || data}
      contentContainerStyle={styles.container}
      ListFooterComponent={
        <View style={{ height: constants.bottomTabHeight }} />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
});

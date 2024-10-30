import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ledgerItems, status } from "../../../../constants/data";
import { LedgerItem } from "./LedgerItem";

interface LedgerItemsProps {
  currentStatus: status;
}

export const LedgerItems: React.FC<LedgerItemsProps> = ({ currentStatus }) => {
  const [currentLedgerItems, setCurrentLedgerItems] = useState(ledgerItems);

  useEffect(() => {
    if (currentStatus === status.ALL) {
      setCurrentLedgerItems(ledgerItems);
    } else {
      const newData = ledgerItems.filter(
        ({ status }) => status === currentStatus
      );
      setCurrentLedgerItems(newData);
    }
  }, [currentStatus]);

  return (
    <FlatList
      data={currentLedgerItems}
      renderItem={({ item }) => <LedgerItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      extraData={currentStatus}
    />
  );
};

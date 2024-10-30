import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { status } from "../../../../constants/data";
import { LedgerItem } from "./LedgerItem";
import { useAppStore } from "@/store/AppStore";

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

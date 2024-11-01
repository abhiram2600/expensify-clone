import { CommonHeader } from "@/components/CommonHeader";
import { View } from "@/components";
import React, { useState } from "react";
import { PickerFilter } from "./components/PickerFilter";
import { TypeSelector } from "./components/TypeSelector";
import { LedgerItems } from "./components/ledger-items";
import { status } from "../../constants/data";

interface SearchScreenProps {}

export const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [currentStatus, setCurrentStatus] = useState<status>(status.ALL);
  return (
    <View.SafeAreaView>
      <CommonHeader screenName="Search" />
      <PickerFilter />
      <TypeSelector setCurrentStatus={setCurrentStatus} />
      <LedgerItems currentStatus={currentStatus} />
    </View.SafeAreaView>
  );
};

import { CommonHeader } from "@/components/CommonHeader";
import { CustomView } from "@/components/CustomView";
import React, { useState } from "react";
import { PickerFilter } from "./components/PickerFilter";
import { TypeSelector } from "./components/TypeSelector";
import { LedgerItems } from "./components/ledger-items";
import { status } from "./data";

interface SearchScreenProps {}

export const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [currentStatus, setCurrentStatus] = useState<status>(status.ALL);
  return (
    <CustomView>
      <CommonHeader screenName="Search" />
      <PickerFilter />
      <TypeSelector setCurrentStatus={setCurrentStatus} />
      <LedgerItems currentStatus={currentStatus} />
    </CustomView>
  );
};

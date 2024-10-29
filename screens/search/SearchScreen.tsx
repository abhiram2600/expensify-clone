import { CommonHeader } from "@/components/CommonHeader";
import { CustomView } from "@/components/CustomView";
import React from "react";
import { PickerFilter } from "./components/PickerFilter";
import { TypeSelector } from "./components/TypeSelector";
import { LedgerItems } from "./components/LedgerItems";

interface SearchScreenProps {}

export const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <>
      <CustomView>
        <CommonHeader screenName="Search" />
        <PickerFilter />
        <TypeSelector />
        <LedgerItems />
      </CustomView>
      {/* <Modal visible={true} transparent={true}>
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>hello</Text>
        </View>
      </Modal> */}
    </>
  );
};

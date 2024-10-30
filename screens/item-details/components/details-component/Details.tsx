import React from "react";
import { StyleSheet } from "react-native";
import { ReceiptImage } from "./ReceiptImage";
import { IndividualDetail } from "./IndividualDetail";
import { useAppStore } from "@/store/AppStore";

interface DetailsProps {
  id: number;
}

export const Details: React.FC<DetailsProps> = ({ id }) => {
  const detailData = useAppStore((state) => state.data).find(
    (item) => item.id === id
  );

  return (
    <>
      <ReceiptImage />
      <IndividualDetail title={"Amount"} value={detailData?.amount} />

      <IndividualDetail title={"Description"} value={detailData?.description} />

      <IndividualDetail title={"Merchant"} value={detailData?.merchant} />

      <IndividualDetail title={"Date"} value={detailData?.date} />
    </>
  );
};

const styles = StyleSheet.create({});

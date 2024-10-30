import React from "react";
import { StyleSheet } from "react-native";
import { ReceiptImage } from "./ReceiptImage";
import { IndividualDetail } from "./IndividualDetail";
import { ledgerItems } from "@/constants/data";

interface DetailsProps {
  id: number;
}

export const Details: React.FC<DetailsProps> = ({ id }) => {
  const detailData = ledgerItems.find((item) => item.id === id);
  console.log(detailData);
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

import React from "react";
import { StyleSheet } from "react-native";
import { ReceiptImage } from "./ReceiptImage";
import { IndividualDetail } from "./IndividualDetail";
import { useAppStore } from "@/store/AppStore";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import { valueType } from "@/constants/data";
import { View } from "@/components";

interface DetailsProps {
  id: number;
}

export const Details: React.FC<DetailsProps> = ({ id }) => {
  const detailData = useAppStore((state) => state.data).find(
    (item) => item.id === id
  );

  const navigation: NavigationProp<RootStackList> = useNavigation();

  const onPressItem = (title: string, value: valueType) => {
    navigation.navigate("DetailEntry", {
      title: title,
      value: value,
      id: id,
    });
  };

  return (
    <View style={styles.container}>
      <ReceiptImage />
      <IndividualDetail
        title={"Amount"}
        value={detailData?.amount}
        onPressItem={onPressItem}
      />

      <IndividualDetail
        title={"Description"}
        value={detailData?.description}
        onPressItem={onPressItem}
        editable={true}
      />

      <IndividualDetail
        title={"Merchant"}
        value={detailData?.merchant}
        onPressItem={onPressItem}
        editable={true}
      />

      <IndividualDetail
        title={"Date"}
        value={detailData?.date}
        onPressItem={onPressItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: "auto",
  },
});

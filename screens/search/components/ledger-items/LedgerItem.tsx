import { StyleSheet, Pressable } from "react-native";
import GenericDIcon from "@/assets/images/icons/generic-document.svg";
import { View } from "@/components";
import { colors } from "@/constants/colors";
import GenericProfile from "@/assets/images/icons/generic-profile.svg";
import { Text } from "@/components/CustomText";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import { ledgerItemType } from "@/constants/data";

export const LedgerItem = ({ item }: { item: ledgerItemType }) => {
  const navigation: NavigationProp<RootStackList> = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("ItemDetail", { id: item.id });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && { opacity: 0.8 },
        styles.ledgerItemType,
      ]}
      onPress={handleOnPress}
    >
      <View.Row style={styles.participantsContainer}>
        <GenericProfile height={17} width={17} />
        <Text>abhi</Text>
        <Text>{` -> `}</Text>
        <Text>abhi</Text>
      </View.Row>
      <View.Row style={styles.detailsContainer}>
        <GenericDIcon height={40} width={40} />
        <View style={styles.nameAndCategory}>
          <Text>name</Text>
          {true && <Text>category</Text>}
        </View>
        <View style={styles.priceContainer}>
          <Text>{item.amount}</Text>
          <Text>oct 28</Text>
        </View>
      </View.Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ledgerItemType: {
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

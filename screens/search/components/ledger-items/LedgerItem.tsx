import { View, StyleSheet, Pressable } from "react-native";
import GenericDIcon from "@/assets/images/icons/generic-document.svg";
import { CustomView } from "@/components/CustomView";
import { ledgerItems } from "../../data";
import { colors } from "@/constants/colors";
import GenericProfile from "@/assets/images/icons/generic-profile.svg";
import { Text } from "@/components/Text";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "@/navigation/RootFlowNavigator";

export const LedgerItem = ({
  item,
}: {
  item: (typeof ledgerItems)[number];
}) => {
  const navigation: NavigationProp<RootStackList> = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("ItemDetail", { id: item.id.toString() });
  };

  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.8 }, styles.ledgerItem]}
      onPress={handleOnPress}
    >
      <CustomView.Row style={styles.participantsContainer}>
        <GenericProfile height={17} width={17} />
        <Text>abhi</Text>
        <Text>{` -> `}</Text>
        <Text>abhi</Text>
      </CustomView.Row>
      <CustomView.Row style={styles.detailsContainer}>
        <GenericDIcon height={40} width={40} />
        <View style={styles.nameAndCategory}>
          <Text>name</Text>
          {true && <Text>category</Text>}
        </View>
        <View style={styles.priceContainer}>
          <Text>{item.amount}</Text>
          <Text>oct 28</Text>
        </View>
      </CustomView.Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ledgerItem: {
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

import {
  StyleSheet,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import { View } from "@/components";
import { colors } from "@/constants/colors";
import { ArrowRight, Receipt } from "@/assets/images/icons";
import { Text } from "@/components/CustomText";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import { ledgerItemType } from "@/constants/data";
import { getFormattedDate } from "@/constants/util";

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
        <Image source={item.fromImage} style={styles.profileImage} />
        <Text style={styles.fromToText}>{item.from}</Text>
        <ArrowRight height={10} width={10} />
        <Image source={item.toImage} style={styles.profileImage} />
        <Text style={styles.fromToText}>{item.to}</Text>
      </View.Row>
      <View.Row style={styles.detailsContainer}>
        {item.receipt ? (
          <Image
            source={item.receipt as ImageSourcePropType}
            style={styles.receipt}
          />
        ) : (
          <View style={styles.receipt}>
            <Receipt height={20} width={20} />
          </View>
        )}

        <View style={styles.nameAndCategory}>
          <Text style={styles.merchantText}>{item.merchant}</Text>
          {item.category && (
            <Text style={styles.categoryText}>{item.category}</Text>
          )}
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.amountText}>{`$${item.amount.toFixed(2)}`}</Text>
          <Text style={styles.dateText}>{getFormattedDate(item.date)}</Text>
        </View>
      </View.Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ledgerItemType: {
    width: "100%",
    backgroundColor: colors.LIGHT_GREEN,
    padding: 12,
    borderRadius: 7,
    // marginTop: 20,
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
    gap: 2,
  },
  profileImage: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
  },
  receipt: {
    height: 40,
    width: 35,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.LIGHT_GREEN_3,
  },

  //----- Text styles -----//
  fromToText: {
    color: colors.WHITE,
    fontSize: 11,
  },
  amountText: {
    textAlign: "right",
    color: "white",
    fontSize: 15,
  },
  dateText: {
    textAlign: "right",
    fontSize: 11,
  },
  merchantText: {
    fontSize: 15,
    color: "white",
  },
  categoryText: {
    fontSize: 11,
  },
});

import {
  StyleSheet,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import { View } from "@/components";
import { ArrowRight, Receipt } from "@/assets/images/icons";
import { Text } from "@/components/CustomText";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import { ledgerItemType } from "@/constants/data";
import { getFormattedDate } from "@/constants/util";
import { useThemeStore } from "@/store";

export const LedgerItem = ({ item }: { item: ledgerItemType }) => {
  const navigation: NavigationProp<RootStackList> = useNavigation();
  const colors = useThemeStore((state) => state.colors);

  const handleOnPress = () => {
    navigation.navigate("ItemDetail", { id: item.id });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && { opacity: 0.8 },
        styles.ledgerItemType,
        {
          backgroundColor: colors.COLOR_1,
        },
      ]}
      onPress={handleOnPress}
    >
      <View.Row style={styles.participantsContainer}>
        <Image source={item.fromImage} style={styles.profileImage} />
        <Text style={[styles.fromToText, { color: colors.textPrimary }]}>
          {item.from}
        </Text>
        <ArrowRight height={10} width={10} />
        <Image source={item.toImage} style={styles.profileImage} />
        <Text style={[styles.fromToText, { color: colors.textPrimary }]}>
          {item.to}
        </Text>
      </View.Row>
      <View.Row style={styles.detailsContainer}>
        {item.receipt ? (
          <Image
            source={item.receipt as ImageSourcePropType}
            style={[styles.receipt, { backgroundColor: colors.COLOR_3 }]}
          />
        ) : (
          <View style={[styles.receipt, { backgroundColor: colors.COLOR_3 }]}>
            <Receipt height={20} width={20} fill={colors.GREY} />
          </View>
        )}

        <View style={styles.nameAndCategory}>
          <Text
            style={[
              styles.merchantText,
              {
                color: colors.textPrimary,
              },
            ]}
          >
            {item.merchant}
          </Text>
          {item.category && (
            <Text style={styles.categoryText}>{item.category}</Text>
          )}
        </View>
        <View style={styles.priceContainer}>
          <Text
            style={[
              styles.amountText,
              {
                color: colors.textPrimary,
              },
            ]}
          >{`$${item.amount.toFixed(2)}`}</Text>
          <Text style={styles.dateText}>{getFormattedDate(item.date)}</Text>
        </View>
      </View.Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ledgerItemType: {
    width: "100%",
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
  },

  //----- Text styles -----//
  fromToText: {
    fontSize: 11,
  },
  amountText: {
    textAlign: "right",
    fontSize: 15,
  },
  dateText: {
    textAlign: "right",
    fontSize: 11,
  },
  merchantText: {
    fontSize: 15,
  },
  categoryText: {
    fontSize: 11,
  },
});

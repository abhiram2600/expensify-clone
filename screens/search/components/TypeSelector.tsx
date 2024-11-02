import { Text } from "@/components/CustomText";
import { colors } from "@/constants/colors";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { filters, status } from "../../../constants/data";
import { View } from "@/components";

interface TypeSelectorProps {
  setCurrentStatus: (newStatus: status) => void;
}

export const TypeSelector: React.FC<TypeSelectorProps> = ({
  setCurrentStatus,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeCurrentStatus = (idx: number, status: status) => {
    setCurrentIndex(idx);
    setCurrentStatus(status);
  };
  return (
    <View style={styles.scrollViewStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {filters.map((item, idx) => {
          let containerStyle: StyleProp<ViewStyle> = [styles.itemContainer];
          let textStyle: StyleProp<TextStyle> = [styles.text];
          let Icon = item.icon;
          if (idx === currentIndex) {
            containerStyle.push(styles.itemSelected);
            textStyle.push(styles.itemSelectedText);
            Icon = item.iconSelected;
          }
          return (
            <Pressable
              onPress={() => changeCurrentStatus(idx, item.type)}
              style={containerStyle}
              key={`${item.type}`}
            >
              <Icon height={20} width={20} />
              <Text style={textStyle}>{item.type}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingTop: 10,
    paddingBottom: 7,
  },
  scrollViewContentStyle: {
    paddingHorizontal: 10,
    gap: 0,
  },
  itemContainer: {
    paddingHorizontal: 15,
    borderRadius: 30,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
  },
  itemSelected: {
    backgroundColor: colors.LIGHT_GREEN,
  },
  itemSelectedText: {
    color: "white",
  },
});

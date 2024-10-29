import { Text } from "@/components/Text";
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
import { filters } from "../data";

interface TypeSelectorProps {}

export const TypeSelector: React.FC<TypeSelectorProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((item, idx) => {
        let containerStyle: StyleProp<ViewStyle> = [styles.itemContainer];
        let textStyle: StyleProp<TextStyle> = [styles.text];
        if (idx === currentIndex) {
          containerStyle.push(styles.itemSelected);
          textStyle.push(styles.itemSelectedText);
        }
        return (
          <Pressable
            onPress={() => setCurrentIndex(idx)}
            style={containerStyle}
            key={item.name}
          >
            <item.icon height={20} width={20} />
            <Text variant="regular" style={textStyle}>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    gap: 0,
  },
  itemContainer: {
    // paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  text: {},
  itemSelected: {
    backgroundColor: colors.LIGHT_GREEN,
  },
  itemSelectedText: {
    color: "white",
  },
});

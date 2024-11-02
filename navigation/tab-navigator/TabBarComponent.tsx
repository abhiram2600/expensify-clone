import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "@/components";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useAppStore } from "@/store/AppStore";
import { colors } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PlusButton } from "./PlusButton";
import { constants } from "@/constants/constants";

export const TabBarComponent = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useAppStore((state) => state.theme);
  return (
    <View.Row
      style={[
        styles.tabBar,
        {
          backgroundColor: colors[theme].BACKGROUND,
          height: constants.bottomTabHeight, // 72 in the app
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={`${label}`}
            onPress={onPress}
            style={styles.itemStyle}
          >
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: isFocused ? "green" : "grey",
              }}
            />
            <Text
              style={[
                styles.textStyle,
                {
                  color: isFocused
                    ? colors[theme].BOLD_TEXT
                    : colors[theme].REGULAR_TEXT,
                },
              ]}
            >
              {label as string}
            </Text>
          </Pressable>
        );
      })}
      <PlusButton />
    </View.Row>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    borderTopColor: colors.LIGHT_GREEN,
    borderTopWidth: 1,
    justifyContent: "space-around",
    paddingTop: 10,
  },
  itemStyle: {
    alignItems: "center",
    gap: 5,
  },
  textStyle: {
    fontSize: 11,
  },
});

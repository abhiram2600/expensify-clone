import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { View, Text } from "@/components";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useAppStore } from "@/store/AppStore";
import { PlusButton } from "./PlusButton";
import { constants } from "@/constants/constants";
import { Inbox, MoneySearch } from "@/assets/images/icons";
import { profilePlaceHolder } from "@/assets/images";
import { useThemeStore } from "@/store";

export const TabBarComponent = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useAppStore((state) => state.theme);
  const colors = useThemeStore((state) => state.colors);
  const tabIcon = {
    Inbox: (isFocused: boolean) => (
      <Inbox
        height={25}
        width={25}
        fill={isFocused ? colors.GREEN : colors.GREY}
      />
    ),
    Search: (isFocused: boolean) => (
      <MoneySearch
        height={25}
        width={25}
        fill={isFocused ? colors.GREEN : colors.GREY}
      />
    ),
    Settings: (isFocused: boolean) => (
      <Image
        source={profilePlaceHolder}
        style={[
          styles.profileImage,
          isFocused && [
            styles.profileImageFocused,
            {
              borderColor: colors.GREEN,
            },
          ],
        ]}
      />
    ),
  };

  return (
    <View.Row
      style={[
        styles.tabBar,
        {
          backgroundColor: colors.background,
          borderTopColor: colors.COLOR_1,
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
            {tabIcon[label as keyof typeof tabIcon](isFocused)}
            <Text
              style={[
                styles.textStyle,
                {
                  color: isFocused ? colors.textPrimary : colors.textSecondary,
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
  profileImage: {
    height: 23,
    width: 23,
    borderRadius: 11.5,
  },
  profileImageFocused: {
    borderWidth: 3,
  },
});

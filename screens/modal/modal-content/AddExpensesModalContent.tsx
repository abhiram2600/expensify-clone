import React from "react";
import { View, Text } from "@/components";
import { Pressable, StyleSheet } from "react-native";
import { Receipt } from "@/assets/images/icons";
import { colors } from "@/constants/colors";

interface AddExpensesModalContentProps {}

const Component = ({ icon, title }: { icon: any; title: string }) => {
  const Icon = icon;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonComponent,
        pressed && styles.onPressViewStyle,
      ]}
    >
      {({ pressed }) => (
        <>
          <Icon
            height={30}
            width={20}
            fill={pressed ? colors.GREEN : colors.GREY}
          />
          <Text style={[styles.label, pressed && styles.onPressTextStyle]}>
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
};

export const AddExpensesModalContent: React.FC<
  AddExpensesModalContentProps
> = () => {
  return (
    <View style={styles.container}>
      <Component icon={Receipt} title="Start Chat" />
      <Component icon={Receipt} title="Track expense" />
      <Component icon={Receipt} title="Submit expense" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonComponent: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 20,
    gap: 17,
  },
  label: {
    fontWeight: "bold",
    color: "white",
  },
  onPressViewStyle: {
    backgroundColor: colors.LIGHT_GREEN_3,
  },
  onPressTextStyle: {
    color: colors.GREY,
  },
});

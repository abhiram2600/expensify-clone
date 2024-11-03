import React from "react";
import { Text, View } from "@/components";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { modalTypeState, useAppStore } from "@/store/AppStore";
import { PlusIcon } from "@/assets/images/icons";

interface PlusButtonProps {}

export const PlusButton: React.FC<PlusButtonProps> = () => {
  const changeModalState = useAppStore((state) => state.changeModalState);
  const { isVisible } = useAppStore((state) => state.modalState);
  const deg = useSharedValue(0);

  if (!isVisible && deg.value !== 0) {
    deg.value = withSpring(0);
  }

  const onPress = () => {
    deg.value = withSpring(deg.value + 45);
    changeModalState({ isVisible: true, type: modalTypeState.PLUSBUTTON });
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${deg.value}deg` }],
  }));
  return (
    <Pressable onPress={onPress} style={styles.plusButton}>
      <Animated.View style={[animatedStyles]}>
        <PlusIcon height={20} width={20} fill={colors.WHITE} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.GREEN,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

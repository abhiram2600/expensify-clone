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

interface PlusButtonProps {}

export const PlusButton: React.FC<PlusButtonProps> = () => {
  const changeModalState = useAppStore((state) => state.changeModalState);
  const data = useAppStore((state) => state.data);

  const deg = useSharedValue(0);
  const onPress = () => {
    if (deg.value < 45) deg.value = withSpring(deg.value + 45);
    else deg.value = withSpring(deg.value - 45);
    changeModalState({ isVisible: true, type: modalTypeState.SEARCH });
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${deg.value}deg` }],
  }));
  return (
    <Pressable onPress={onPress} style={styles.plusButton}>
      <Animated.View style={[animatedStyles]}>
        <Text style={[{ fontSize: 25 }]}>{`+`}</Text>
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

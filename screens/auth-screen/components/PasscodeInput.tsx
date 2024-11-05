import React, { useRef } from "react";
import { View } from "@/components";
import {
  Dimensions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
} from "react-native";
import { useThemeStore } from "@/store";

interface PasscodeInputProps {
  passcode: string[];
  setPasscode: (newPasscode: string[]) => void;
}

export const PasscodeInput: React.FC<PasscodeInputProps> = ({
  passcode,
  setPasscode,
}) => {
  const colors = useThemeStore((state) => state.colors);
  const inputRef = useRef<(TextInput | null)[]>([]);
  const onChangeText = (value: string, idx: number) => {
    const newCode = [...passcode];
    newCode[idx] = value;
    setPasscode(newCode);

    if (value && idx < 5) {
      inputRef.current[idx + 1]?.focus();
    }
  };

  const onKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    idx: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && idx > 0) {
      inputRef.current[idx - 1]?.focus();
    }
  };

  return (
    <View.Row style={styles.container}>
      {passcode.map((digit, idx) => (
        <TextInput
          style={[
            styles.input,
            { backgroundColor: colors.COLOR_3, color: colors.WHITE },
          ]}
          value={digit}
          keyboardType="numeric"
          key={idx}
          selectionColor={colors.BLACK}
          cursorColor={colors.BLACK}
          maxLength={1}
          onChangeText={(value) => onChangeText(value, idx)}
          onKeyPress={(e) => onKeyPress(e, idx)}
          ref={(ref) => {
            inputRef.current[idx] = ref;
          }}
        />
      ))}
    </View.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: 60,
  },
  input: {
    borderBottomWidth: 3,
    fontSize: 25,
    width: (Dimensions.get("window").width - 130) / 6,
    padding: 10,
    textAlign: "center",
  },
});

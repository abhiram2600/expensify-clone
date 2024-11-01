import { colors } from "@/constants/colors";
import { useAppStore } from "@/store/AppStore";
import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  variant?: "regular" | "bold" | "none";
}

// interface TextComponentType extends React.FC<TextProps> {
//   Bold: React.FC<{children: React.ReactNode, style: RNTextProps["style"]}>;
// }

export const Text: React.FC<TextProps> = ({
  children,
  variant = "regular",
  style,
  ...props
}) => {
  const theme = useAppStore((state) => state.theme);

  const styles: RNTextProps["style"] = (() => {
    switch (variant) {
      case "none":
        return style;
      case "bold":
        return [
          {
            color: colors[theme].BOLD_TEXT,
            fontWeight: "bold",
          },
          style,
        ];
      case "regular":
        return [
          {
            color: colors[theme].REGULAR_TEXT,
            fontWeight: "400",
          },
          style,
        ];
    }
  })();

  return (
    <RNText style={styles} {...props}>
      {children}
    </RNText>
  );
};

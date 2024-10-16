import { Text, StyleSheet, TextProps } from "react-native";
import { Colors } from "../constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";

const styles = StyleSheet.create({
  body3: {
    fontSize: 10,
    lineHeight: 16,
  },
  body2: {
    fontSize: 12,
    lineHeight: 16,
  },
  body1: {
    fontSize: 14,
    lineHeight: 16,
  },
  headLine: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 8,
    lineHeight: 12,
  },
  subtitla1: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitla2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitla3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "bold",
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
};

export default function ThemedText({ variant, color, ...rest }: Props) {
  const colors = useThemeColors();

  return (
    <Text
      style={[styles[variant ?? "body3"], { color: colors[color ?? "grayDark"] }]}
      {...rest}
    />
  );
}

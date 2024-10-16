import { Text, StyleSheet, TextProps } from "react-native";
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
  variant?: keyof styles;
  color?: string;
};

export default function ThemedText({ variant, color, ...rest }: Props) {
  return <Text style={styles[variant ?? "body3"]} {...rest} />;
}

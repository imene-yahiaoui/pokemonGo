import type { TextProps } from "react-native";

type Props = TextProps & {
  variant?: string;
  color?: string;
};

export default function ThemedText({ variant, color, ...rest }: Props) {
  return <Text {...rest} />;
}

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
  headLine:{
    fontSize:24,
    lineHeight: 32,
    fontWeight:"blod",
  }
  caption:{
    fontSize:8,
    lineHeight: 12,
  },
  subtitla1:{
    fontSize:14,
    lineHeight: 16,
    fontWeight:"blod",
  },
  subtitla2:{
    fontSize:12,
    lineHeight: 16,
    fontWeight:"blod",
  }
  subtitla3:{
    fontSize:10,
    lineHeight: 16,
    fontWeight:"blod",
  }
});

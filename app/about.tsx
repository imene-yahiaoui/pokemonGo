import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function About() {
  return (
    <View>
      <Link href="/">go Back </Link>
      <Text> Abouuut</Text>
    </View>
  );
}

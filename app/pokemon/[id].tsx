import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Pokemon() {
    const param = useLocalSearchParams()
  return (
    <View>
      <Link href="/">go Back </Link>
      <Text> pokemon </Text>
    </View>
  );
}

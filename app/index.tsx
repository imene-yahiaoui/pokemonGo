import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedText  from "../components/ThemedText";
import {SafeAreaView} from "react-native-safe-area-context"
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText variant="headLine"> Pokedex </ThemedText>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    color: "green",
  },
});

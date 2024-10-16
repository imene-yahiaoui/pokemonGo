import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedText from "../components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@//hooks/useThemeColors.ts";
export default function Index() {
  /**
   * recuperer les color dans le fichier usethemeColors
   */
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <ThemedText variant="headLine" color="grayWhite">
        {" "}
        Pokedex{" "}
      </ThemedText>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

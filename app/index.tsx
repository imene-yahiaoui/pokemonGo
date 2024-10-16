import { Text, View, StyleSheet ,SafeAreaView } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <SafeAreaView  style={styles.container}>
      <Text>heloo Imene</Text>
      <Link href="/about"> aboutMe </Link>
      <Link href={{ pathname: "/pokemon/[id]", params: { id: 3 } }}>
        {" "}
        pokemon 3{" "}
      </Link>
    </SafeAreaView >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    color: "green",
  },
});

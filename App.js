import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Page3 from "./Components/Page3/Page3";

export default function App() {
  return (
    <Page3/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    paddingTop: 50,
  },
});

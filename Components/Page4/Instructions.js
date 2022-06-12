import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const onPressTitle = () => {
  console.log("title pressed");
};

export default function App() {
  const titleText = useState("Video Instruction");
  const bodyText = useState(
    "Before commencing the activity, please bring the camera close to your face so that we can confirm your identity.."
  );
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
    >
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Arial",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
});

const App = () => {
  <Image source={require("C:Users\ruifeOneDriveDesktop/push-up.png")} />;
};

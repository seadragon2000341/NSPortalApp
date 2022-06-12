import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import insStyles from "./InstructionStyle.js";

const onPressTitle = () => {
  console.log("title pressed");
};

export default function Ins() {
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
      <Text style={insStyles.baseText}>
        <Text style={insStyles.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    </View>
  );
}

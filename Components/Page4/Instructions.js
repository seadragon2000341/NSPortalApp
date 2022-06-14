import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import insStyles from "./InstructionStyle.js";
import pushupgif from "./pushup.gif";

const onPressTitle = () => {
  console.log("title pressed");
};

export default function Ins(props) {
  return (
    <ScrollView>
      <View style={insStyles.container}>
        <View style={{ justifyContent: "flex-start" }}>
          <Text style={insStyles.titleText} onPress={onPressTitle}>
            Video Instruction
          </Text>
        </View>
        <Text style={insStyles.firstText}>
          {"\n"}
          Before commencing the activity, please bring the camera close to your
          face so that we can confirm your identity{"\n"}
        </Text>
        <View>
          <Image
            source={require("./face-scanner.png")}
            style={{ width: 500, height: 200, borderRadius: 25, padding: 50 }}
          />
        </View>
        <Text style={insStyles.secondText}>
          {"\n"}
          When doing push ups and sit ups, angle the camera as shown in the
          below pictures. {"\n"} Ensure that full body can be seen so the AI can
          capture your accurately.{" "}
        </Text>
        <View>
          <Image
            source={require("./pushup.gif")}
            style={{
              width: 500,
              height: 200,
              borderRadius: 25,
              marginTop: 10,
              //flex: 0.45,
            }}
          />
        </View>
        <View>
          <Image
            source={require("./Sit-Ups.gif")}
            style={{
              width: 500,
              height: 200,
              borderRadius: 25,
              marginTop: 10,
              //flex: 0.45,
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={[insStyles.button]}
            onPress={() => props.navigation.navigate("Page5")}
          >
            <Text style={{ fontSize: 25 }}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

export default class Ins extends React.Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }

  Ins(props) {
    return (
      <ScrollView>
        <View style={insStyles.container}>
          <Text style={insStyles.baseText}>
            <Text style={insStyles.titleText}>Video Instruction</Text>
            <Text style={insStyles.firstText}>
              {"\n"}
              Before commencing the activity, please bring the camera close to
              your face so that we can confirm your identity{"\n"}
            </Text>
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
            below pictures. {"\n"} Ensure that full body can be seen so the AI
            can capture your accurately.{" "}
          </Text>
          <View>
            <Image
              source={require("./pushup.gif")}
              style={{
                width: 400,
                height: 10,
                borderRadius: 25,
                padding: 50,
                flex: 0.45,
              }}
            />
          </View>
          <View>
            <Image
              source={require("./sit-ups.png")}
              style={{
                width: 400,
                height: 50,
                borderRadius: 25,
                padding: 50,
                flex: 0.45,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={[insStyles.button]}
              onPress={() => props.navigation.navigate("Page5")}
            >
              <Text>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Countdown from "./Countdown";
import React, { useState } from "react";
import Score from "./Score";
import Webcam from "react-webcam";
import StartRecord from "./StartRecord";

export default function Page5(props) {
  const [pushupCam, setpushupCam] = useState(false);
  const [situpCam, setsitupCam] = useState(false);
  const [pushupTime, setpushupTime] = useState(false);
  const [situpTime, setsitupTime] = useState(false);
  const [runCam, setrunCam] = useState(false);
  const [runTime, setrunTime] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        {!pushupCam && !pushupTime ? (
          <View>
            <FontAwesome
              name="camera"
              size={200}
              style={styles.camera}
              onClick={() => {
                alert("camera will start recording");
                setpushupCam(true);
              }}
            />
            <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
              <Text style={styles.buttonText}>
                Click on camera icon to start IPPT recording
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {pushupCam ? (
          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
              <Text style={styles.buttonText}>Pushups will end in:</Text>
            </TouchableOpacity>
            <Countdown
              time={5}
              finishComponent={setpushupTime}
              setCam={setpushupCam}
            ></Countdown>
            <Webcam></Webcam>
          </View>
        ) : null}

        {pushupTime ? (
          <Score name="Pushups" data="48" points="23/25"></Score>
        ) : null}
        {pushupTime && !situpTime && !situpCam ? (
          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
              <Text style={styles.buttonText}>Situps will commence in:</Text>
            </TouchableOpacity>
            <StartRecord time={10} setCam={setsitupCam}></StartRecord>
          </View>
        ) : null}
        {situpCam ? (
          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
              <Text style={styles.buttonText}>Situps will end in:</Text>
            </TouchableOpacity>
            <Countdown
              time={5}
              finishComponent={setsitupTime}
              setCam={setsitupCam}
            ></Countdown>
            <Webcam></Webcam>
          </View>
        ) : null}
        {situpTime ? (
          <Score name="Situps" data="50" points="24/25"></Score>
        ) : null}
        {situpTime && !runTime && !runCam ? (
          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
              <Text style={styles.buttonText}>2.4km will start in:</Text>
            </TouchableOpacity>
            <StartRecord time={10} setCam={setrunCam}></StartRecord>
          </View>
        ) : null}
        {runCam ? (
          <View>
            <Webcam></Webcam>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Submitting log file and video file...");
                setrunTime(true);
                setrunCam(false);
              }}
            >
              <Text>Press button to stop 2.4km run</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {runTime ? (
          <View>
            <Score name="2.4km" data="10 mins 15 sec" points="39/50"></Score>
            <TouchableOpacity activeOpacity={0.8} style={styles.button1} onPress={() => {
              alert("Attempt submitted!");
              props.navigation.navigate("Profile")
            }}>
              <Text style={styles.buttonText}>Submit attempt</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
  camera: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 120,
  },
  button1: {
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

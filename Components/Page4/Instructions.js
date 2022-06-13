import React, { useState } from "react";
<<<<<<< Updated upstream
import {
  View,
  Text,
  StyleSheet,
  Image,
  button,
  TouchableOpacity,
} from "react-native";
import insStyles from "./InstructionStyle.js";

const onPressTitle = () => {
  console.log("title pressed");
};

export default function Ins() {
  return (
    <View style={insStyles.container}>
      <Text style={insStyles.baseText}>
        <Text style={insStyles.titleText} onPress={onPressTitle}>
          Video Instruction
        </Text>
        <Text style={insStyles.firstText}>
          {"\n"}
          Before commencing the activity, please bring the camera close to your
          face so that we can confirm your identity{"\n"}
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
        When doing push ups and sit ups, angle the camera as shown in the below
        pictures. {"\n"} Ensure that full body can be seen so the AI can capture
        your accurately.{" "}
      </Text>
      <View>
        <Image
          source={require("./push-up.png")}
          style={{
            width: 500,
            height: 200,
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
            width: 500,
            height: 200,
            borderRadius: 25,
            padding: 50,
            flex: 0.45,
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={[insStyles.button]}>
          <Text>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
=======
import { View, Text, StyleSheet, Image, TouchableOpacity,Button } from "react-native";
import Webcam from "react-webcam";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles2 from "./style2";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function TabScreen(){

  function IntroScreen({navigation}){
    return(
      <View style = {styles2.container}>
        <View style = {styles2.headerBar}>
          <View style = {styles2.headerBarUpper}>
            <Text style ={styles2.headerBarText}>Video Instructions</Text>
          </View>
          <View style = {styles2.headerBarLower}>
          <Text style ={styles2.headerText}>Before commencing the activity, please bring the camera close to your face so that we can confirm your identity.</Text>
          </View>
        </View>
        <View style={styles2.videoFrame}>
          <Webcam audio={false} height={285} width={500}></Webcam>

        </View>
  
        <View style = {styles2.nextBar}>
          <TouchableOpacity onPress={()=>{(navigation.navigate("PushUp"))}} style = {styles2.nextButton}>
            <Text>
              Next{'>'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{(navigation.goBack())}} style = {styles2.backButton}>
            <Text>
              Close{'<'}
            </Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
    function PushUpScreen({navigation}){
      return(
        <View>
          <TouchableOpacity onPress={()=>{navigation.navigate("SitUp")}}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
    function SitUpScreen({navigation}){
      return(
        <View>
          <TouchableOpacity onPress={()=>{(navigation.navigate("Running"))}}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
    function RunningScreen({navigation}){
      return(
        <View>
          <TouchableOpacity onPress={()=>{(navigation.navigate("PushUp"))}}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
  
  return(
    <Stack.Navigator initialRouteName="Intro" screenOptions={{headerShown:false}} >
      
        <Stack.Screen name ="Intro" component={IntroScreen} ></Stack.Screen>
        <Stack.Screen name ="PushUp" component={PushUpScreen} ></Stack.Screen>
        <Stack.Screen name ="SitUp" component={SitUpScreen} ></Stack.Screen>
        <Stack.Screen name ="Running" component={RunningScreen}></Stack.Screen>


    </Stack.Navigator>
)

}

>>>>>>> Stashed changes

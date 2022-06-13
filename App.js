import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./Components/Page2/ProfilePage";
<<<<<<< Updated upstream
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Ins from "./Components/Page4/Instructions";
=======
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import IpptScreen from "./Components/Page4/IpptScreen";

>>>>>>> Stashed changes

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            }

            if (route.name === "Instruction") {
              iconName = focused
                ? "ios-information-circle-sharp"
                : "ios-information-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
<<<<<<< Updated upstream
          tabBarActiveTintColor: "darkgreen",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
        <Tab.Screen
          name="Instruction"
          options={{ headerShown: false }}
          component={Ins}
        />
=======
          tabBarActiveTintColor: 'darkgreen',
          tabBarInactiveTintColor: 'gray'
         })}
        >
        <Tab.Screen name = "Profile" options = {{headerShown: false}}component ={ProfileScreen} />
        <Tab.Screen name = "IPPT" options = {{headerShown: false}}component ={IpptScreen} />
        
>>>>>>> Stashed changes
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IpptStack from "./Components/Page3/Page3";
import ProfileScreen from "./Components/Page2/ProfilePage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Ins from "./Components/Page4/Instructions";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Login from "./Components/Page1/Page1";

import { createStackNavigator } from "@react-navigation/stack";

export function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          if (route.name === "IPPT") {
            iconName = focused
              ? "run-fast"
              : "run";
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
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
        name="IPPT"
        options={{ headerShown: false }}
        component={IpptStack}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    paddingTop: 50,
  },
});

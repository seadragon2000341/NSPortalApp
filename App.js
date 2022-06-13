import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Page3 from "./Components/Page3/Page3";
import ProfileScreen from "./Components/Page2/ProfilePage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Ins from "./Components/Page4/Instructions";

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

            if (route.name === "Ippt") {
              iconName = focused
                ? "ios-information-circle-sharp"
                : "ios-information-circle-outline";
            }

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
          name="Ippt"
          options={{ headerShown: false }}
          component={Page3}
        />
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
    //justifyContent: "center",
    paddingTop: 50,
  },
});

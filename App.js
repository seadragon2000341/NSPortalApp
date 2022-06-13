import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
<<<<<<< Updated upstream
    <View style={styles.container}>
      <Text>testing 3.2</Text>
      <StatusBar style="auto" />
    </View>
=======
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
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import {View, Text , TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabScreen from "./Instructions";

const Stack = createStackNavigator();

export default function IpptScreen({navigation}){
    function IpptHomeScr(){
        return(
            <View style = {{alignContent:"center", justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Tab")}}>
                    <Text>BUTTON</Text>
                </TouchableOpacity>
            </View>
        )

    }

    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name = "Home" component={IpptHomeScr}options={{presentation:"transparentModal"}}></Stack.Screen>
            <Stack.Screen name ="Tab" component={TabScreen} options={{presentation:"transparentModal", headerShown:false}}></Stack.Screen>


        </Stack.Navigator>
    )
}

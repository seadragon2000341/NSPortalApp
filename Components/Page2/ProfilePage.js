import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView} from "react-native";
import styles from "./profileStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



export default function ProfileScreen({navigation}){
    let  [image,setImage] = useState(true)
    let toggleSwitch = () => setImage(previousState => !previousState);
    let deez = require("./barcode.png")
    let imageUri = image ?  require("./campPass.png"): require("./barcode.png");
    const Stack = createStackNavigator();

    
    return(
        <View style = {styles.container}>
            <View style = {styles.title}>
                <View style = {styles.titleText}>
                    <Text style = {{fontSize:24, fontWeight:"bold"}}>Welcome back,</Text>
                    <Text style = {{fontSize:32}}>2LT Tan Li Hao</Text>
                </View>
                <View style ={styles.titleImage}>
                    <Image source={require('./profilePic.png')} style={{width:80, height:80, borderRadius:50}}  />
                </View>
            </View>
            <View style = {styles.pass}>
                <Text>Your Camp Pass</Text>
                <TouchableOpacity onPress ={()=>{toggleSwitch()}}>
                    <Image style = {{width:320, height:190,resizeMode:"contain"}} source={imageUri } />
                </TouchableOpacity>
            </View>
            <View style = {styles.navButtons}>
                <View style = {styles.row1}>
                    <TouchableOpacity  style={[styles.button, {backgroundColor:"#E27D60"}]} onPress={()=>{navigation.navigate("IPPT")}} >
                    <MaterialCommunityIcons name="run" size={30} color="black" />
                        <Text>IPPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor:"#C38D9E"}]}>
                        <FontAwesome5 name="calendar" size={30} color="black" />
                        <Text>Career Planning</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.row2}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:"#EDF5E1"}]}>
                        <MaterialIcons name="forum" size={30} color="black" />
                        <Text>Forum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor:"#B1A296"}]}>
                        <FontAwesome5 name="hand-holding-medical" size={30} color="black" />
                        <Text>Health</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
}
    

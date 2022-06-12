import * as React from "react"
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: StatusBar.currentHeight,
    },
    title:{
      flex:0.15,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"green"

        
    },
    titleText:{

        padding:20 
    },
    titleImage:{
        paddingRight:10,
        
        alignContent:"center",
        justifyContent:"center"
    },
    pass:{

        flex:0.4,
        justifyContent:"center",
        alignItems:"center",

    },
    navButtons:{
      flex:0.45,
      borderWidth:3,
      borderColor:"black",
      justifyContent:"center",
      backgroundColor:"#557A95"
    },
    row1:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      padding:10,

    },
    row2:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      padding:10,

    },
    button:{
      borderColor:"darkgrey",
      borderWidth:1,
      height:80,
      width:110,
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
    }

  });
export default styles
  
import React from "react";
import { StyleSheet, StatusBar } from "react-native";

const insStyles = StyleSheet.create({
  baseText: {
    //fontFamily: "Arial",
  },

  container: {
    borderWidth: 3,
    borderColor: "black",
    flex: 1,
    justifyContent: "flex-start", //downwards to the center
    alignItems: "center", //left or right
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    marginTop: 50,
  },
  //fontFamily: "Times New Roman",
  firstText: {
    fontSize: 20,
    lineHeight: 25,
    flex: 0.15,
    borderWidth: 3,
    borderColor: "transparent",
  },
  secondText: {
    fontSize: 20,
    lineHeight: 25,
    //fontFamily: "Arial",
  },
  button: {
    flex: 0.05,
    borderWidth: 15,
    borderColor: "transparent",
    backgroundColor: "green",
    marginTop: 10,
  },
});

export default insStyles;

import React from "react";
import { StyleSheet } from "react-native";

const insStyles = StyleSheet.create({
  baseText: {
    //fontFamily: "Arial",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    //fontFamily: "Times New Roman",
  },
  container: {
    borderWidth: 3,
    borderColor: "black",
    flex: 1,
    justifyContent: "flex-start", //downwards to the center
    alignItems: "center", //left or right
  },
  firstText: {
    fontSize: 20,
    lineHeight: 50,
    flex: 0.15,
    borderWidth: 15,
    borderColor: "transparent",
  },
  secondText: {
    fontSize: 20,
    lineHeight: 25,
    //fontFamily: "Arial",
  },
  button: {
    flex: 0.15,
    borderWidth: 15,
    borderColor: "transparent",
  },
});

export default insStyles;

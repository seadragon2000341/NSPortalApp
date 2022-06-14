import React from "react";
import { StyleSheet } from "react-native";

const insStyles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    marginTop: 40,
    //fontFamily: "Times New Roman",
  },
  container: {
    borderWidth: 3,
    borderColor: "transparent",
    flex: 1,
    justifyContent: "flex-start", //downwards to the center
    alignItems: "center", //left or right
  },
  firstText: {
    fontSize: 20,
    lineHeight: 25,
    flex: 0.15,
    borderWidth: 15,
    borderColor: "transparent",
    backgroundColor: "white",
  },
  secondText: {
    fontSize: 20,
    lineHeight: 25,
    flex: 0.15,
    backgroundColor: "white",
    //fontFamily: "Arial",
  },
  button: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 15,
  },
});

export default insStyles;

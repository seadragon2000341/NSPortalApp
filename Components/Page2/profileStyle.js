import * as React from "react";
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 10,
    marginTop: 25,
  },
  titleText: {
    padding: 20,
  },
  titleImage: {
    paddingRight: 10,

    alignContent: "center",
    justifyContent: "center",
  },
  pass: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  navButtons: {
    marginTop: 10,
    flex: 0.45,
    // borderWidth:3,
    // borderColor:"black",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  button: {
    borderColor: "darkgrey",
    borderWidth: 1,
    height: 120,
    width: 155,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;

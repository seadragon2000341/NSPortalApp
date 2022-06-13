import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function PastResults(props) {
    return (
        <Text style={styles.detailText}>Year {props.year} - {props.grade}</Text>
    )
}

const styles = StyleSheet.create({
    detailText: {
        color: "black",
        fontSize: 15,
        fontWeight: "normal",
    },
})
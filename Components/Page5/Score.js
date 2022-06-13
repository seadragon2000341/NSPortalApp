import { Text, StyleSheet, View } from "react-native";
export default function Score( props ) {
  return (
    <View style={styles.cardItemContainer}>
      <View style={styles.scoreContainer}>
        <View>
          <Text style={styles.teamName}>{props.name}</Text>
        </View>
              <Text style={styles.teamScore}>{props.data}</Text>
        <View>
          <Text style={styles.teamName}>Points achieved</Text>
        </View>
        <Text style={styles.teamScore}>{props.points}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  camera: {
    alignItems: "top",
    margin: 20,
  },
  cardItemContainer: {
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    margin: 12,
    alignItems: "center",
  },
  scoreContainer: {
    margin: 3,
  },
  teamName: {
    fontSize: 14,
    textAlign: "center",
  },
  teamScore: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});

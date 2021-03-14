import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c2c2c",
  },
});

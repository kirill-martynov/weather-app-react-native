import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import propTypes from "prop-types";

export const Weather = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Ionicons name="rainy" size={128} />
        <Text style={styles.tempText}>{Math.round(temp)}°</Text>
      </View>
      <View style={styles.halfContainer}>

    </View>
    </View>
  );
};

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempText: {
    marginTop: 10,
    fontSize: 42 
  },
});

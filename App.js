import * as React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

import { WEATHER_API_KEY } from "./src/constants";

import { Loading } from "./src/components/Loading";
import { Weather } from "./src/components/Weather";

export default function App() {
  const [tempValue, setTempValue] = React.useState(0);
  const [conditionValue, setConditionValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const getWeather = async (latitude, longitude) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?`;

      const params = {
        appid: WEATHER_API_KEY,
        lat: latitude,
        lon: longitude,
        units: "metric",
      };

      const { data } = await axios.get(`${url}`, { params });
      const { weather } = data;
      const { temp } = data.main;

      setIsLoading(false);
      setTempValue(temp);
      setConditionValue(weather[0].main);
    } catch (error) {
      console.error("error");
    }
  };

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't get your location");
    }
  };

  React.useEffect(() => {
    getLocation();
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Weather temp={tempValue} condition={conditionValue} />
  );
}

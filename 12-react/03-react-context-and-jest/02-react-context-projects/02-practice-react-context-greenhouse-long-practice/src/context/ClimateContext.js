// Temperature has a default value of 50 degrees

import { createContext, useContext, useEffect, useState } from "react";

// Humidity has a default value of 40%
export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

const ClimateProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [thermostatSetting, setThermostatSetting] = useState(temperature);
  const [higrometerSetting, setHygrometerSetting] = useState(humidity);

  useEffect(() => {
    const temperatureTimeout = setTimeout(() => {
      if (temperature < thermostatSetting) {
        setTemperature((temp) => Math.min(temp + 1, thermostatSetting));
      } else if (temperature > thermostatSetting) {
        setTemperature((temp) => Math.max(temp - 1, thermostatSetting));
      }
    }, 1000);

    return () => clearTimeout(temperatureTimeout);
  }, [thermostatSetting, temperature]);

  useEffect(() => {
    const humidityTimeout = setTimeout(() => {
      if (humidity < higrometerSetting) {
        setHumidity((hum) => Math.min(hum + 2, higrometerSetting));
      } else if (humidity > higrometerSetting) {
        setHumidity((hum) => Math.max(hum - 2, higrometerSetting));
      }
    }, 1000);

    return () => clearTimeout(humidityTimeout);
  }, [higrometerSetting, humidity]);

  return (
    <ClimateContext.Provider
      value={{
        temperature,
        setTemperature,
        humidity,
        setHumidity,
        thermostatSetting,
        setThermostatSetting,
        higrometerSetting,
        setHygrometerSetting,
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
};

export default ClimateProvider;

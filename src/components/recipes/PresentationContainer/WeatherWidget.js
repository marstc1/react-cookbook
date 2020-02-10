import React from "react";

const WeatherWidget = props => {
  const { weather } = props;

  return (
    <div>
      <h1>Weather</h1>
      <p>location: {weather.location}</p>
      <p>conditions: {weather.conditions}</p>
      <p>currentTemp: {weather.currentTemp}</p>
      <p>highestTemp: {weather.highestTemp}</p>
      <p>lowestTemp: {weather.lowestTemp}</p>
      <p>windSpeed: {weather.windSpeed}</p>
    </div>
  );
};

export { WeatherWidget };

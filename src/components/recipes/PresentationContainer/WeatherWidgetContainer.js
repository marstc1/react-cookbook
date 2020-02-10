import React, { Component } from "react";
import WeatherData from "../../../data/weatherData";
import { WeatherWidget } from "./WeatherWidget";

class WeatherWidgetContainer extends Component {
  // state would normally be set to null ready to be populated by the componentDidMount function
  state = { weather: WeatherData };

  componentDidMount() {
    // api call here to fetch data and set state
  }

  render() {
    return <WeatherWidget weather={this.state.weather} />;
  }
}

export { WeatherWidgetContainer };

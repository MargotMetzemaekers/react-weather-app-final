import React from "react";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thun icon 19 10
          <WeatherIcon code="01d" />
        </div>
      </div>
    </div>
  );
}

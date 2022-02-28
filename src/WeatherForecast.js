import React from "react";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherIcon code="01d" />
        </div>
      </div>
    </div>
  );
}

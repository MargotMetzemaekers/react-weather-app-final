import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">°C | °F</span>
      </span>
    );
  } else {
    return "F";
  }
}

import React, { useState, useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "../components/WeatherDisplay";

const App = () => {
  const [city, setCity] = useState("Paratwada");
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });

  const apiKey = "7b99a09d28aa86c3bfd0878a634f4cfd";
  const lat = "21.273060";
  const lon = "77.523422";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setCity(data.name);
        setWeather({ temperature: ((data.main.temp - 273.15).toFixed(2)), conditions: data.weather[0].main });
         // Convert Kelvin to Celsius
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weather={weather} city={city}/>
    </div>
  );
}

export default App;

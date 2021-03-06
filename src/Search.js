<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState(" ");

  function showTemperature(response) {
=======
function showTemperature(response) {
>>>>>>> 243b74def1434d6782487b139be9b5c295efaf25
    props.setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "44ac128828c16a45c52db4f8cca3eace";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Look for a city"
        onChange={changeCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,

      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
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

  let form = (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Look for a city"
        autoFocus={true}
        onChange={changeCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}

        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°C</li>
          <li> Description: {weather.description}</li>
          <li> Humidity: {weather.humidity}%</li>
          <li> Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

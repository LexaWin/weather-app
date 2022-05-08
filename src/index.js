import { render } from 'react-dom';
import MainService from './services/MainService';

import './index.css';

const mainService = new MainService();
const weather = mainService.getWeather();
const {
  city,
  temperature,
  weatherDescription,
  weatherProperties: {
    cloudcover,
    humidity,
    windSpeed,
    pressure,
    uvIndex,
    visibility,
  },
} = weather;

const element = (
  <main className="main">
    <h1>
      Weather Today in
      <br />
      <span className="city-name">{city}</span>
    </h1>
    <div className="main-properties">
      <p className="weather-description">{weatherDescription}</p>
      <p className="temperature">{temperature}°</p>
    </div>
    <ul>
      <li>
        <h3>cloudcover</h3>
        <p>{cloudcover}%</p>
      </li>

      <li>
        <h3>humidity</h3>
        <p>{humidity}%</p>
      </li>

      <li>
        <h3>wind speed</h3>
        <p>{windSpeed} km/h</p>
      </li>

      <li>
        <h3>pressure</h3>
        <p>{pressure} mbar</p>
      </li>

      <li>
        <h3>uv index</h3>
        <p>{uvIndex}</p>
      </li>

      <li>
        <h3>visibility</h3>
        <p>{visibility} km</p>
      </li>
    </ul>
  </main>
);

const container = document.querySelector('.app');

render(element, container);

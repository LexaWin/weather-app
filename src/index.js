import { render } from 'react-dom';
import MainService from './services/MainService';

const mainService = new MainService();
const weather = mainService.getWeather();
const {
  city,
  temperature,
  weatherDescription,
  properties: { cloudcover, humidity },
} = weather;

const element = (
  <div>
    <h1>Weather Today in {city}</h1>
    <p>{weatherDescription}</p>
    <p>{temperature}°</p>
    <ul>
      <li>
        <h3>cloudcover</h3>
        <p>{cloudcover}%</p>
      </li>

      <li>
        <h3>humidity</h3>
        <p>{humidity}%</p>
      </li>
    </ul>
  </div>
);

const container = document.querySelector('.app');

render(element, container);

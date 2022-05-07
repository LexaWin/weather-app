import { render } from 'react-dom';
import MainService from './services/MainService';

const mainService = new MainService();
const weather = mainService.getWeather();
const city = weather.city;
const temperature = weather.temperature;

const element = (
  <div>
    <h1>Weather Today in {city}</h1>
    <p>{temperature}°</p>
  </div>
);
const container = document.querySelector('.app');

render(element, container);

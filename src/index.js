import { render } from 'react-dom';
import MainService from './services/MainService';

const mainService = new MainService();
const weather = mainService.getWeather();
const city = weather.city;

const element = <h1>Weather Today in {city}</h1>;
const container = document.querySelector('.app');

render(element, container);

import { useState } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

function App() {
  const mainService = new MainService();

  const [input, setInput] = useState(true);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  function onWeatherLoaded(weather) {
    setLoading(false);
    setWeather(weather);
  }

  function onCityInputed(city) {
    setInput(false);
    setLoading(true);

    mainService
      .getWeather(city)
      .then(onWeatherLoaded)
      .catch(() => {
        setInput(true);
        setLoading(false);
      });
  }

  function onCityClick() {
    setInput(true);
  }

  function onCityInputClose() {
    if (!weather) return;

    setInput(false);
  }

  const cityInput = input ? (
    <CityInput handleInput={onCityInputed} handleClose={onCityInputClose} />
  ) : null;
  const spinner = loading ? <Spinner /> : null;
  const main = weather ? (
    <Main weather={weather} handleClick={onCityClick} />
  ) : null;

  return (
    <>
      {cityInput}
      {spinner}
      {main}
    </>
  );
}

export default App;

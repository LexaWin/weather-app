import { useState } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const { getState, dispatch } = props.store;
  const { input, loading } = getState();
  const [weather, setWeather] = useState(null);

  function onWeatherLoaded(weather) {
    dispatch({ type: 'LOADING_OFF' });
    setWeather(weather);
  }

  function onCityInputed(city) {
    dispatch({ type: 'LOADING' });

    mainService
      .getWeather(city)
      .then(onWeatherLoaded)
      .catch(() => {
        dispatch({ type: 'INPUT' });
      });
  }

  function onCityClick() {
    dispatch({ type: 'ON_CITY_CLICK' });
  }

  function onCityInputClose() {
    if (!weather) return;

    dispatch({ type: 'INPUT_OFF' });
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

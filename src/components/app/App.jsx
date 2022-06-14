import { useState } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const {
    state: { input, loading },
    dispatch,
  } = props;
  const [weather, setWeather] = useState(null);

  function onWeatherLoaded(weather) {
    dispatch({ type: 'LOADING_OFF' });
    setWeather(weather);
  }

  function onCityInputed(city) {
    dispatch({ type: 'INPUT_OFF' });
    dispatch({ type: 'LOADING_ON' });

    mainService
      .getWeather(city)
      .then(onWeatherLoaded)
      .catch(() => {
        dispatch({ type: 'INPUT_ON' });
        dispatch({ type: 'LOADING_OFF' });
      });
  }

  function onCityClick() {
    dispatch({ type: 'INPUT_ON' });
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

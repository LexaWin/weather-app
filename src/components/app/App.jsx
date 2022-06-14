import { useState } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const {
    state: { input },
    dispatch,
  } = props;
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  function onWeatherLoaded(weather) {
    setLoading(false);
    setWeather(weather);
  }

  function onCityInputed(city) {
    dispatch({ type: 'INPUT_OFF' });
    setLoading(true);

    mainService
      .getWeather(city)
      .then(onWeatherLoaded)
      .catch(() => {
        dispatch({ type: 'INPUT_ON' });
        setLoading(false);
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

import { bindActionCreators } from 'redux';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';
import {
  actLoading,
  actWeather,
  actInput,
  actOnCityClick,
  actInputOff,
} from '../../actions';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const { getState, dispatch } = props.store;
  const { input, loading, weather } = getState();

  const {
    actLoadingDispatch,
    actWeatherDispatch,
    actInputDispatch,
    actOnCityClickDispatch,
    actInputOffDispatch,
  } = bindActionCreators(
    {
      actLoadingDispatch: actLoading,
      actWeatherDispatch: actWeather,
      actInputDispatch: actInput,
      actOnCityClickDispatch: actOnCityClick,
      actInputOffDispatch: actInputOff,
    },
    dispatch
  );

  function onCityInputed(city) {
    actLoadingDispatch();

    mainService
      .getWeather(city)
      .then(actWeatherDispatch)
      .catch(actInputDispatch);
  }

  function onCityInputClose() {
    if (!weather) return;

    actInputOffDispatch();
  }

  const cityInput = input ? (
    <CityInput handleInput={onCityInputed} handleClose={onCityInputClose} />
  ) : null;
  const spinner = loading ? <Spinner /> : null;
  const main = weather ? (
    <Main weather={weather} handleClick={actOnCityClickDispatch} />
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

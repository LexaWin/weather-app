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

  function onCityInputed(city) {
    dispatch(actLoading());

    mainService
      .getWeather(city)
      .then((weather) => dispatch(actWeather(weather)))
      .catch(() => dispatch(actInput()));
  }

  function onCityClick() {
    dispatch(actOnCityClick());
  }

  function onCityInputClose() {
    if (!weather) return;

    dispatch(actInputOff());
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

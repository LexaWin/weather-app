import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

const actLoading = () => ({ type: 'LOADING' });
const actWeather = (value) => ({ type: 'WEATHER', payload: value });
const actInput = () => ({ type: 'INPUT' });
const actOnCityClick = () => ({ type: 'ON_CITY_CLICK' });
const actInputOff = () => ({ type: 'INPUT_OFF' });

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

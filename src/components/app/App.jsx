import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const { getState, dispatch } = props.store;
  const { input, loading, weather } = getState();

  function onCityInputed(city) {
    dispatch({ type: 'LOADING' });

    mainService
      .getWeather(city)
      .then((weather) => dispatch({ type: 'WEATHER', payload: weather }))
      .catch(() => dispatch({ type: 'INPUT' }));
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

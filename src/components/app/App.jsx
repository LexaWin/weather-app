import { bindActionCreators } from 'redux';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';
import * as actions from '../../actions';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const { getState, dispatch } = props.store;
  const { input, loading, weather } = getState();
  const { actLoading, actWeather, actInput, actOnCityClick, actInputOff } =
    bindActionCreators(actions, dispatch);

  function onCityInputed(city) {
    actLoading();

    mainService.getWeather(city).then(actWeather).catch(actInput);
  }

  function onCityInputClose() {
    if (!weather) return;

    actInputOff();
  }

  const cityInput = input ? (
    <CityInput handleInput={onCityInputed} handleClose={onCityInputClose} />
  ) : null;
  const spinner = loading ? <Spinner /> : null;
  const main = weather ? (
    <Main weather={weather} handleClick={actOnCityClick} />
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

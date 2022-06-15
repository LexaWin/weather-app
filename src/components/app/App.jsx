import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const mainService = new MainService();

  const {
    input,
    loading,
    weather,
    actLoading,
    actWeather,
    actInput,
    actOnCityClick,
    actInputOff,
  } = props;

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

const mapStateToProps = (state) => {
  return {
    input: state.input,
    loading: state.loading,
    weather: state.weather,
  };
};

export default connect(mapStateToProps, actions)(App);

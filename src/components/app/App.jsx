import { Component } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CityInput from '../cityInput/CityInput';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.mainService = new MainService();

    this.state = {
      input: true,
      loading: false,
      weather: null,
    };

    this.onWeatherLoaded = this.onWeatherLoaded.bind(this);
    this.onCityInputed = this.onCityInputed.bind(this);
    this.onCityClick = this.onCityClick.bind(this);
    this.onCityInputClose = this.onCityInputClose.bind(this);
  }

  onWeatherLoaded(weather) {
    this.setState({ loading: false, weather });
  }

  onCityInputed(city) {
    this.setState({ input: false, loading: true });

    this.mainService.getWeather(city).then(this.onWeatherLoaded);
  }

  onCityClick() {
    this.setState({ input: true });
  }

  onCityInputClose() {
    this.setState({ input: false });
  }

  render() {
    const { input, loading, weather } = this.state;

    const cityInput = input ? (
      <CityInput
        handleInput={this.onCityInputed}
        handleClose={this.onCityInputClose}
      />
    ) : null;
    const spinner = loading ? <Spinner /> : null;
    const main = weather ? (
      <Main weather={weather} handleClick={this.onCityClick} />
    ) : null;

    return (
      <>
        {cityInput}
        {spinner}
        {main}
      </>
    );
  }
}

export default App;

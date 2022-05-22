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
  }

  onWeatherLoaded(weather) {
    this.setState({ loading: false, weather });
  }

  render() {
    const { input, loading, weather } = this.state;

    const cityInput = input ? <CityInput /> : null;
    const spinner = loading ? <Spinner /> : null;
    const main = weather && !loading ? <Main weather={weather} /> : null;

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

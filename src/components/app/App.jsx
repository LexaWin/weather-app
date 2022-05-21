import { Component } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';
import CitySelect from '../citySelect/CitySelect';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.mainService = new MainService();

    this.state = {
      select: true,
      loading: false,
      weather: null,
    };

    this.onWeatherLoaded = this.onWeatherLoaded.bind(this);
  }

  onWeatherLoaded(weather) {
    this.setState({ loading: false, weather });
  }

  render() {
    const { select, loading, weather } = this.state;

    const citySelect = select ? <CitySelect /> : null;
    const spinner = loading ? <Spinner /> : null;
    const main = weather && !loading ? <Main weather={weather} /> : null;

    return (
      <>
        {citySelect}
        {spinner}
        {main}
      </>
    );
  }
}

export default App;

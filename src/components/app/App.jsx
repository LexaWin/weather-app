import { Component } from 'react';
import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import MainService from '../../services/MainService';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.mainService = new MainService();

    this.state = {
      loading: true,
      weather: null,
    };

    this.onWeatherLoaded = this.onWeatherLoaded.bind(this);
  }

  onWeatherLoaded(weather) {
    this.setState({ loading: false, weather });
  }

  componentDidMount() {
    this.mainService.getWeather().then(this.onWeatherLoaded);
  }

  render() {
    const { loading, weather } = this.state;

    const element = loading ? <Spinner /> : <Main weather={weather} />;

    return element;
  }
}

export default App;

import { Component } from 'react';
import MainService from '../../services/MainService';
import Properties from '../properties/Properties';
import WeatherDescription from '../weatherDescription/WeatherDescription';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.mainService = new MainService();

    this.state = {
      weather: {
        city: undefined,
        temperature: undefined,
        weatherDescription: 'undefined',
        weatherProperties: {
          cloudcover: undefined,
          humidity: undefined,
          windSpeed: undefined,
          pressure: undefined,
          uvIndex: undefined,
          visibility: undefined,
        },
        isDay: undefined,
      },
    };
  }

  componentDidMount() {
    const weather = this.mainService.getWeather();

    this.setState({ weather });
  }

  render() {
    const { city, temperature, weatherDescription, weatherProperties, isDay } =
      this.state.weather;

    let mainClassName = 'main';
    if (isDay) mainClassName += ' main__day';

    return (
      <main className={mainClassName}>
        <h1>
          Weather Now in
          <br />
          <span className="city-name">{city}</span>
        </h1>
        <div className="main-properties">
          <WeatherDescription description={weatherDescription} />
          <p className="temperature">{temperature}°</p>
        </div>
        <Properties properties={weatherProperties} />
      </main>
    );
  }
}

export default App;

import { Component } from 'react';
import MainService from '../../services/MainService';
import Properties from '../properties/Properties';
import WeatherDescription from '../weatherDescription/WeatherDescription';

import './Main.css';

class Main extends Component {
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

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const weather = this.mainService.getWeather();

    this.setState({ weather });
  }

  handleClick() {
    this.setState(({ weather: { city: prevCity } }) => {
      const newCity = prevCity === 'Los Angeles' ? 'Kaluga' : 'Los Angeles';

      const weather = this.mainService.getWeather(newCity);

      return { weather };
    });
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
          <span className="city-name" onClick={this.handleClick}>
            {city}
          </span>
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

export default Main;

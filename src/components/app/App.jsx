import MainService from '../../services/MainService';
import Property from '../property/Property';

import './App.css';

function App() {
  const mainService = new MainService();
  const weather = mainService.getWeather();
  const {
    city,
    temperature,
    weatherDescription,
    weatherProperties: {
      cloudcover,
      humidity,
      windSpeed,
      pressure,
      uvIndex,
      visibility,
    },
    isDay,
  } = weather;

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
        <p className="weather-description">{weatherDescription}</p>
        <p className="temperature">{temperature}°</p>
      </div>
      <ul className="properties">
        <Property name="cloudcover" value={cloudcover} unit="%" />
        <Property name="humidity" value={humidity} unit="%" />
        <Property name="wind speed" value={windSpeed} unit=" km/h" />
        <Property name="pressure" value={pressure} unit=" mbar" />
        <Property name="uv index" value={uvIndex} unit="" />
        <Property name="visibility" value={visibility} unit=" km" />
      </ul>
    </main>
  );
}

export default App;

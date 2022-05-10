import MainService from '../../services/MainService';

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
        <li className="property">
          <h3 className="property-name">cloudcover</h3>
          <p className="property-value">{cloudcover}%</p>
        </li>

        <li className="property">
          <h3 className="property-name">humidity</h3>
          <p className="property-value">{humidity}%</p>
        </li>

        <li className="property">
          <h3 className="property-name">wind speed</h3>
          <p className="property-value">{windSpeed} km/h</p>
        </li>

        <li className="property">
          <h3 className="property-name">pressure</h3>
          <p className="property-value">{pressure} mbar</p>
        </li>

        <li className="property">
          <h3 className="property-name">uv index</h3>
          <p className="property-value">{uvIndex}</p>
        </li>

        <li className="property">
          <h3 className="property-name">visibility</h3>
          <p className="property-value">{visibility} km</p>
        </li>
      </ul>
    </main>
  );
}

export default App;

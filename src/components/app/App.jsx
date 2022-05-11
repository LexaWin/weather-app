import MainService from '../../services/MainService';
import Properties from '../properties/Properties';
import WeatherDescription from '../weatherDescription/WeatherDescription';

import './App.css';

function App() {
  const mainService = new MainService();
  const weather = mainService.getWeather();
  const { city, temperature, weatherDescription, weatherProperties, isDay } =
    weather;

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

export default App;

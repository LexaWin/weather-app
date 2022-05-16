import Properties from '../properties/Properties';
import WeatherDescription from '../weatherDescription/WeatherDescription';

import './Main.css';

function Main(props) {
  const { city, temperature, weatherDescription, weatherProperties, isDay } =
    props.weather;

  let mainClassName = 'main';
  if (isDay) mainClassName += ' main__day';

  return (
    <main className={mainClassName}>
      <h1>
        The Weather Now in
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

export default Main;

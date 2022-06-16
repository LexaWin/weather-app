import { useSelector, useDispatch } from 'react-redux';
import { actOnCityClick } from '../../actions';
import Properties from '../properties/Properties';
import WeatherDescription from '../weatherDescription/WeatherDescription';

import './Main.css';

function Main() {
  const {
    weather: {
      city,
      temperature,
      weatherDescription,
      weatherProperties,
      isDay,
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  let mainClassName = 'main';
  if (isDay) mainClassName += ' main__day';

  function handleKeyDown(e) {
    if (e.code !== 'Enter' && e.code !== 'Space') return;

    e.preventDefault();

    dispatch(actOnCityClick());
  }

  return (
    <main className={mainClassName}>
      <h1>
        The Weather Now in
        <br />
        <span
          className="city-name"
          onClick={() => dispatch(actOnCityClick())}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          {city}
        </span>
      </h1>
      <div className="main-properties">
        <WeatherDescription description={weatherDescription} isDay={isDay} />
        <p className="temperature">{temperature}°</p>
      </div>
      <Properties properties={weatherProperties} />
    </main>
  );
}

export default Main;

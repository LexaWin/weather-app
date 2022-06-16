import { connect } from 'react-redux';
import { actOnCityClick } from '../../actions';
import Properties from '../properties/Properties';
import WeatherDescription from '../weatherDescription/WeatherDescription';

import './Main.css';

function Main(props) {
  const {
    weather: {
      city,
      temperature,
      weatherDescription,
      weatherProperties,
      isDay,
    },
    actOnCityClick,
  } = props;

  let mainClassName = 'main';
  if (isDay) mainClassName += ' main__day';

  function handleKeyDown(e) {
    if (e.code !== 'Enter' && e.code !== 'Space') return;

    e.preventDefault();

    actOnCityClick();
  }

  return (
    <main className={mainClassName}>
      <h1>
        The Weather Now in
        <br />
        <span
          className="city-name"
          onClick={actOnCityClick}
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

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps, { actOnCityClick })(Main);

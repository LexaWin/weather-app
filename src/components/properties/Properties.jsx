import Property from '../property/Property';

import './Properties.css';

function Properties(props) {
  const { cloudcover, humidity, windSpeed, pressure, uvIndex, visibility } =
    props.properties;

  return (
    <ul className="properties">
      <Property name="cloudcover" value={cloudcover} unit="%" />
      <Property name="humidity" value={humidity} unit="%" />
      <Property name="wind speed" value={windSpeed} unit=" km/h" />
      <Property name="pressure" value={pressure} unit=" mbar" />
      <Property name="uv index" value={uvIndex} unit="" />
      <Property name="visibility" value={visibility} unit=" km" />
    </ul>
  );
}

export default Properties;

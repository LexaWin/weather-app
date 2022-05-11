import './WeatherDescription.css';

function WeatherDescription({ description }) {
  const className = `weather-description weather-description__${description.toLowerCase()}`;

  return <p className={className}>{description}</p>;
}

export default WeatherDescription;

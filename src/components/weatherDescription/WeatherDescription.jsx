import './WeatherDescription.css';

function WeatherDescription({ description }) {
  const transformedDescription = description.toLowerCase().replace(' ', '-');
  const className = `weather-description weather-description__${transformedDescription}`;

  return <p className={className}>{description}</p>;
}

export default WeatherDescription;

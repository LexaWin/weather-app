import './WeatherDescription.css';

function WeatherDescription({ description, isDay }) {
  const transformedDescription = `${description
    .toLowerCase()
    .replaceAll(' ', '-')}${isDay ? '' : '_night'}`;
  const className = `weather-description weather-description__${transformedDescription}`;

  return <p className={className}>{description}</p>;
}

export default WeatherDescription;

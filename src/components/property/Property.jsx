import './Property.css';

function Property(props) {
  const { name, value, unit } = props;

  const classNames = {
    cloudcover: 'property__cloudcover',
    humidity: 'property__humidity',
    'wind speed': 'property__wind-speed',
    pressure: 'property__pressure',
    'uv index': 'property__uv-index',
    visibility: 'property__visibility',
  };

  const className = `property ${classNames[name]}`;

  return (
    <li className={className}>
      <h3 className="property-name">{name}</h3>
      <p className="property-value">{value + unit}</p>
    </li>
  );
}

export default Property;

import './Property.css';

function Property(props) {
  const { name, value, unit } = props;

  return (
    <li className="property">
      <h3 className="property-name">{name}</h3>
      <p className="property-value">{value + unit}</p>
    </li>
  );
}

export default Property;

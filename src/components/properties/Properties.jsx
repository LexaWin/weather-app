import Property from '../property/Property';

import './Properties.css';

function Properties(props) {
  const properties = props.properties.map((property, index) => (
    <Property key={index} {...property} />
  ));

  return <ul className="properties">{properties}</ul>;
}

export default Properties;

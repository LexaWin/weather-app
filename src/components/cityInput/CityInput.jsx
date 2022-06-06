import { useState, useEffect, createRef } from 'react';

import './CityInput.css';

import btn from '../../img/btn-close.svg';

function CitySelect(props) {
  const [value, setValue] = useState('');

  const input = createRef();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleInput(value);
  }

  useEffect(() => input.current.focus(), []);

  return (
    <div className="city-input">
      <button className="btn-close" onClick={props.handleClose}>
        <img src={btn} alt="Close" width="25" />
      </button>

      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={input}
          type="text"
          value={value}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your city here..."
          required
        />
        <button type="submit" className="form-submit">
          OK
        </button>
      </form>
    </div>
  );
}

export default CitySelect;

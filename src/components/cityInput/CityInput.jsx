import { useEffect, createRef } from 'react';
import {
  actLoading,
  actWeather,
  actInput,
  actInputOff,
  actSetValue,
} from '../../actions';
import { connect } from 'react-redux';
import MainService from '../../services/MainService';

import './CityInput.css';

import btn from '../../img/btn-close.svg';

function CitySelect(props) {
  const mainService = new MainService();

  const {
    value,
    weather,
    actLoading,
    actWeather,
    actInput,
    actInputOff,
    actSetValue,
  } = props;

  const input = createRef();

  function handleChange(e) {
    actSetValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    actLoading();
    mainService.getWeather(value).then(actWeather).catch(actInput);
    actSetValue('');
  }

  function handleClose() {
    if (!weather) return;

    actSetValue('');
    actInputOff();
  }

  useEffect(() => input.current.focus(), []);

  return (
    <div className="city-input">
      <button className="btn-close" onClick={handleClose}>
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

const mapStateToProps = (state) => ({
  value: state.value,
  weather: state.weather,
});

export default connect(mapStateToProps, {
  actLoading,
  actWeather,
  actInput,
  actInputOff,
  actSetValue,
})(CitySelect);

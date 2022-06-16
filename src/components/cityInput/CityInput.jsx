import { useEffect, createRef } from 'react';
import {
  actLoading,
  actWeather,
  actInput,
  actInputOff,
  actSetValue,
} from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import MainService from '../../services/MainService';

import './CityInput.css';

import btn from '../../img/btn-close.svg';

function CitySelect() {
  const mainService = new MainService();

  const { value, weather } = useSelector((state) => state);
  const dispatch = useDispatch();

  const input = createRef();

  function handleChange(e) {
    dispatch(actSetValue(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actLoading());
    mainService
      .getWeather(value)
      .then((weather) => dispatch(actWeather(weather)))
      .catch(() => dispatch(actInput()));
    dispatch(actSetValue(''));
  }

  function handleClose() {
    if (!weather) return;

    dispatch(actSetValue(''));
    dispatch(actInputOff());
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

export default CitySelect;

import { Component } from 'react';

import './CityInput.css';

import btn from '../../img/btn-close.svg';

class CitySelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleInput(this.state.value);
  }

  render() {
    return (
      <div className="city-input">
        <button className="btn-close">
          <img src={btn} alt="Close" width="25" />
        </button>

        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
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
}

export default CitySelect;

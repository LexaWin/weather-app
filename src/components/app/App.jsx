import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import CityInput from '../cityInput/CityInput';
import { actOnCityClick } from '../../actions';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const { input, loading, weather, actOnCityClick } = props;

  const cityInput = input ? <CityInput /> : null;
  const spinner = loading ? <Spinner /> : null;
  const main = weather ? (
    <Main weather={weather} handleClick={actOnCityClick} />
  ) : null;

  return (
    <>
      {cityInput}
      {spinner}
      {main}
    </>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  loading: state.loading,
  weather: state.weather,
});

export default connect(mapStateToProps, {
  actOnCityClick,
})(App);

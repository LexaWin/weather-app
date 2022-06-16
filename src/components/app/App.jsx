import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import CityInput from '../cityInput/CityInput';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const { input, loading, weather } = props;

  return (
    <>
      {input ? <CityInput /> : null}
      {loading ? <Spinner /> : null}
      {weather ? <Main /> : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  loading: state.loading,
  weather: state.weather,
});

export default connect(mapStateToProps)(App);

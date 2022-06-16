import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import CityInput from '../cityInput/CityInput';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const { input, loading, weather } = useSelector((state) => state);

  return (
    <>
      {input ? <CityInput /> : null}
      {loading ? <Spinner /> : null}
      {weather ? <Main /> : null}
    </>
  );
}

export default App;

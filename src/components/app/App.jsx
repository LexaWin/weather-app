import Main from '../main/Main';
import Spinner from '../spinner/Spinner';
import CityInput from '../cityInput/CityInput';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

import './App.css';

function App() {
  const { input, loading, weather } = useSelector((state) => state);

  const duration = 300;

  return (
    <>
      <Transition in={input} timeout={duration} unmountOnExit>
        {(state) => <CityInput className={`city-input_${state}`} />}
      </Transition>
      {loading ? <Spinner /> : null}
      {weather ? <Main /> : null}
    </>
  );
}

export default App;

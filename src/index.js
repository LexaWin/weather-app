import { render } from 'react-dom';
import App from './components/app/App';
import { legacy_createStore as createStore } from 'redux';

import './index.css';

const initialState = {
  input: true,
  loading: false,
  weather: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        loading: false,
        input: true,
      };

    case 'INPUT_OFF':
      return {
        ...state,
        input: false,
      };

    case 'LOADING':
      return {
        ...state,
        loading: true,
        input: false,
      };

    case 'WEATHER':
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };

    case 'ON_CITY_CLICK':
      return {
        ...state,
        input: true,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  const element = <App store={store} />;
  const container = document.querySelector('.app');
  render(element, container);
};

store.subscribe(update);

update();

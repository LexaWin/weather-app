import { render } from 'react-dom';
import App from './components/app/App';

import './index.css';

const initialState = {
  input: true,
  loading: false,
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

    case 'LOADING_OFF':
      return {
        ...state,
        loading: false,
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

let state;

const dispatch = (action) => {
  state = reducer(state, action);
  const element = <App state={state} dispatch={dispatch} />;
  const container = document.querySelector('.app');
  render(element, container);
};

dispatch({ type: '' });

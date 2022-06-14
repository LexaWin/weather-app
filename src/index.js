import { render } from 'react-dom';
import App from './components/app/App';

import './index.css';

const initialState = {
  input: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_ON':
      return {
        ...state,
        input: true,
      };

    case 'INPUT_OFF':
      return {
        ...state,
        input: false,
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

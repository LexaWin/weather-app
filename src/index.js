import { render } from 'react-dom';
import App from './components/app/App';

import './index.css';

const initialState = {
  input: true,
};

const reducer = (state, action) => {
  if (action.type === 'INPUT_ON') {
    return {
      ...state,
      input: true,
    };
  } else if (action.type === 'INPUT_OFF') {
    return {
      ...state,
      input: false,
    };
  } else {
    return state;
  }
};

let state = initialState;

const dispatch = (action) => {
  state = reducer(state, action);
  const element = <App state={state} dispatch={dispatch} />;
  const container = document.querySelector('.app');
  render(element, container);
};

dispatch({ type: '' });

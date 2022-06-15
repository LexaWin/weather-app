import { render } from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

import './index.css';

const store = createStore(reducer);

const element = (
  <Provider store={store}>
    <App />
  </Provider>
);
const container = document.querySelector('.app');
render(element, container);

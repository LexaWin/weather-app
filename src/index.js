import { render } from 'react-dom';
import App from './components/app/App';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

import './index.css';

const store = createStore(reducer);

const update = () => {
  const element = <App store={store} />;
  const container = document.querySelector('.app');
  render(element, container);
};

store.subscribe(update);

update();

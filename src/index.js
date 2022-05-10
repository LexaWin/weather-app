import { render } from 'react-dom';
import App from './components/app/App';

import './index.css';

const element = <App />;

const container = document.querySelector('.app');

render(element, container);

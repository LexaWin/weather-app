import spinner from '../../img/spinner.gif';

import './Spinner.css';

function Spinner() {
  return (
    <main className="spinner">
      <img src={spinner} alt="Loading" width="100%" />
    </main>
  );
}

export default Spinner;

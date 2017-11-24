import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const FunctionComponent = () => (
   <div>
      <h1> "Im a functional Component" </h1>
   </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

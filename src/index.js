import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyDeHXoOBDAFaWiE8dgVwJW9L3WYu_0EM_Q"
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
   console.log(data);
});

const FunctionComponent = () => (
   <div>
      <h1> "Im a functional Component" </h1>
   </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './vendor/styles/w3.css';
import './vendor/fonts/css/all.min.css';
import './vendor/icons/icon.css';
import './vendor/fonts/css/fontawesome.min.css';
import * as serviceWorker from './serviceWorker';
import './styles/style.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
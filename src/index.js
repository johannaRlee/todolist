import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ToDoApp';
import registerServiceWorker from './registerServiceWorker';
// import './css/bootstrap.css';
// import './js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


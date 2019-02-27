import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import myApp from './reducers';

let store = createStore(myApp);

ReactDOM.render(<App />, document.querySelector('#root'));

store.subscribe(ReactDOM.render);

ReactDOM.render();
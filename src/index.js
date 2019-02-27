import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import myApp from './reducers';

let store = createStore(myApp);

function render() {
ReactDOM.render(<App store={store}/>, document.querySelector('#root'));
}

store.subscribe(render);

render();
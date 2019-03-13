import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './store';

function render() {
ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
}

store.subscribe(render);

render();
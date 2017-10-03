import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import quotesApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import api from './middleware/api';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
let store = createStoreWithMiddleware(quotesApp);
let rootElement = document.getElementById('root');
registerServiceWorker();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


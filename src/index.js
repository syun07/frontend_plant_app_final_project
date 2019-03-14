import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/allReducers';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

let store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, push } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Create the store
const store = createStore(combineReducers({
    cUser: reducers.cUser,
    memberNews: reducers.memberNews
}),
applyMiddleware(
    thunkMiddleware
));

function run() {
    ReactDOM.render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <App store={store} />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
}

function init() {
    run();
    store.subscribe(run);
}

init();

registerServiceWorker();

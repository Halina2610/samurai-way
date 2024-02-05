import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import store, { AppStateType } from './redux/store/store';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store as unknown as Store<AppStateType, any>}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

/*
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store, {AppStateType} from "./redux/redux-store";
import { Provider } from 'react-redux';

const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

/!*
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*!/
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import App from './App';
import {AppStateType, store} from "./redux/store/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store as unknown as Store<AppStateType, any>}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import {ActionType, StateType, StoreType} from "./redux/store";


type AppProps = {
    state: StateType
    dispatch: (action: ActionType) => void
    store: StoreType
};

function App(props: AppProps) {

    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <Navbar sidebar={props.state.sidebar} />
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => (
                            <Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />
                        )} />

                        <Route path="/dialogs" render={() =>  (

                            <Dialogs dispatch={props.dispatch} messagesPage={props.store.getState().messagesPage} />
                        )} />

                        <Route path="/news" render={News} />
                        <Route path="/music" render={Music} />
                        <Route path="/settings" render={Settings} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
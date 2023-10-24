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
import {DialogsContainer} from "./components/dialogs/DialogsContainer";


type AppProps = {
    state: StateType
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
                            <Profile store={props.store} />
                        )} />

                        <Route path="/dialogs" render={() =>  (

                            <DialogsContainer store={props.store} />
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
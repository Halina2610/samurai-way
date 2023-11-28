import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/header/Header';
import {Profile} from './components/profile/Profile';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";


function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => (
                            <Profile/>
                        )}/>
                        <Route path="/dialogs" render={() => (
                            <DialogsContainer/>
                        )}/>
                        <Route path="/news" render={News}/>
                        <Route path="/music" render={Music}/>
                        <Route path="/settings" render={Settings}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
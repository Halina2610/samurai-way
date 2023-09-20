import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" component={Profile} />
                        <Route path="/dialogs" component={Dialogs} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}


export default App;

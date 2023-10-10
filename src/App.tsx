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
import {StateType} from "./redux/State";


type AppProps = {
   state: StateType
};

function App(props: AppProps) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <Navbar sitebar={props.state.siteBar} />
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile">
                            <Profile posts={props.state.profilePage.posts} />
                        </Route>
                        <Route path="/dialogs">
                            <Dialogs messages={props.state.messagesPage} />
                        </Route>
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
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/header/Header';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileComponent";


function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>

                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile/:userId?" render={() => (
                            <ProfileContainer/>
                        )}/>
                        <Route path="/dialogs" render={() => (
                            <DialogsContainer/>
                        )}/>
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/users" component={UsersContainer} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
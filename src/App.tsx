import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './pages/header/Header';
import { News } from './pages/news/News';
import { Music } from './pages/music/Music';
import { Settings } from './pages/settings/Settings';
import { DialogsContainer } from "./pages/dialogs/DialogsContainer";
import { NavbarContainer } from "./pages/navbar/NavbarContainer";
import { UsersContainer } from "./pages/users/UsersContainer";
import { ProfileContainer } from "./pages/profile/ProfileComponent";
import { LoginContainer } from "./pages/login/LoginContainer";
import { Footer } from './pages/footer/Footer';

function App() {
    const userId = '';

    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <NavbarContainer />

                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path="/">
                            {userId ? <Redirect to={`/profile/${userId}`} /> : <Redirect to="/profile" />}
                        </Route>
                        <Route path="/profile/:userId?" component={ProfileContainer} />
                        <Route path="/dialogs" component={DialogsContainer} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/users" component={UsersContainer} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/login" component={LoginContainer} />
                    </Switch>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
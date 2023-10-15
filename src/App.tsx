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
import {PostsPropsType, StateType, updateNewPostText} from "./redux/State";


type AppProps = {
   state: StateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPost: string) => void
};

function App(props: AppProps) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <Navbar sitebar={props.state.siteBar} />
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => (
                            <Profile profilePage ={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
                        )} />

                        <Route path="/dialogs" render={() => (
                            <Dialogs messages={props.state.messagesPage} />
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
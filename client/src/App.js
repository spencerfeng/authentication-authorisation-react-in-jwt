import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPageContainer';

class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
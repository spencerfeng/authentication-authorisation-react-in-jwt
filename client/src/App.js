import React, { Component } from 'react';
import Navbar from './components/NavbarContainer';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPageContainer';
import SignupPage from './components/SignupPageContainer';
import { authenticateUser } from './actions';
import { IsEmpty } from './helpers';

class App extends Component {

    componentDidMount() {
        
        // check if there is a logged in user
        // if there is no logged in user, check to see if there is a token item in localstorage
        // if there is a token item in localstorage, verify if this token is correct and get the its associated user
        if (IsEmpty(this.props.store.getState().cUser)) {
    
            const token = localStorage.getItem('token');
    
            if (token !== null) {
                this.props.store.dispatch(authenticateUser(token));
            }
    
        }
    
    }

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
import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';
import LoginPage from './LoginPage';

const mapDispatchToProps = (dispatch) => ({
    signin: (user, history) => { 
        dispatch(userLogin(user, history)); 
    }
});

export default connect(null, mapDispatchToProps)(LoginPage);
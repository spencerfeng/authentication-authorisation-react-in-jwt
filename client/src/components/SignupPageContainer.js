import React from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions';
import SignupPage from './SignupPage';

const mapDispatchToProps = (dispatch) => ({
    signup: (user, history) => {
        dispatch(userSignup(user, history));
    }
});

export default connect(null, mapDispatchToProps)(SignupPage);
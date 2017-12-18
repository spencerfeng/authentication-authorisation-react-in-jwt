import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { setAuthenticatedUser } from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    cUser: state.cUser
});

const mapDispatchToProps = (dispatch) => ({
    removeLoggedInUser: () => { dispatch(setAuthenticatedUser({})); }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
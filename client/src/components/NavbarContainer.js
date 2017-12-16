import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => ({
    cUser: state.cUser
});

export default connect(mapStateToProps, null)(Navbar);
import React from 'react';
import { connect } from 'react-redux';
import { getMemberNews } from '../actions';
import MemberNewsPage from './MemberNewsPage';

const mapStateToProps = (state, ownProps) => ({
    cUser: state.cUser,
    memberNews: state.memberNews
});

const mapDispatchToProps = (dispatch) => ({
    retrieveMemberNews: (token, history) => {
        dispatch(getMemberNews(token, history));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberNewsPage);



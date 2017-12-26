import React, { Component } from 'react';
import { IsEmpty } from '../helpers';
import { memberNews } from '../reducers';

class MemberNewsPage extends Component {

    componentDidMount() {

        // Get the token in localStorage,
        // then dispatch the action to get the member only information.
        const token = localStorage.getItem('token');

        if (token !== null) {
            this.props.retrieveMemberNews(token, this.props.history);
        } else {
            this.props.history.push('/');
        }
    
    }

    render() {

        return (

            <div className="row">
                <div className="col col-md-3"></div>
                <div className="col col-md-6">
                    <div className="panel panel-info">
                        <div className="panel-heading">Member News</div>
                        <div className="panel-body">
                            { this.props.memberNews.length > 0 ?
                                <ul>
                                    {this.props.memberNews.map(function(newsItem, index) {
                                        return <li key={index}>{newsItem.title}</li>;
                                    })}
                                </ul>
                                :
                                <div>Sorry, there are no news for members.</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col col-md-3"></div>
            </div>

        );

    }

}

export default MemberNewsPage;
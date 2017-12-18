import React, { Component } from 'react';

class MemberNewsPage extends Component {

    render() {

        return (

            <div className="row">
                <div className="col col-md-3"></div>
                <div className="col col-md-6">
                    <div className="panel panel-info">
                        <div className="panel-heading">Member News</div>
                        <div className="panel-body">
                            <ul>
                                <li>Member news 1</li>
                                <li>Member news 2</li>
                                <li>Member news 3</li>
                                <li>Member news 4</li>
                                <li>Member news 5</li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-md-3"></div>
            </div>

        );

    }

}

export default MemberNewsPage;
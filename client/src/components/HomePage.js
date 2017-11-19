import React, { Component } from 'react';

class HomePage extends Component {

    render() {

        return (

            <div className="row">
                <div className="col col-md-3"></div>
                <div className="col col-md-6">
                    <div class="panel panel-info">
                        <div class="panel-heading">Public News</div>
                        <div class="panel-body">
                            <ul>
                                <li>Public news 1</li>
                                <li>Public news 2</li>
                                <li>Public news 3</li>
                                <li>Public news 4</li>
                                <li>Public news 5</li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-md-3"></div>
            </div>

        );

    }

}

export default HomePage;
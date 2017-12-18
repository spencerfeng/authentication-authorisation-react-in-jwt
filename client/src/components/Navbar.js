import React, { Component } from 'react';
import { IsEmpty } from '../helpers';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault();

        // set store state cUser to be an empty object
        this.props.removeLoggedInUser();

        // remove the token in localStorage
        localStorage.removeItem('token');
    }

    render() {

        return (
            
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">React JWT</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Home</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {IsEmpty(this.props.cUser) && 
                                <li><a href="/login">Login</a></li>
                            }
                            {IsEmpty(this.props.cUser) &&
                                <li><a href="/signup">Signup</a></li>
                            }
                            {!IsEmpty(this.props.cUser) &&
                                <li className="dropdown">
                                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Hello, {this.props.cUser.firstName} {this.props.cUser.lastName} <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" onClick={this.logout}>Logout</a></li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
    
        )

    }

}

export default Navbar;
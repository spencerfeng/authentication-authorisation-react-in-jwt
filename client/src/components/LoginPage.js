import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(`email: ${this.email.value}`);
        console.log(`password: ${this.password.value}`);

        const user = {
            email: this.email.value,
            password: this.password.value
        };

        this.props.signin(user, this.props.history);
    }

    render() {
        return (
            <div className="row">
                <div className="col col-md-3"></div>
                <div className="col col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" className="form-control" ref={(email) => {this.email = email;}} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" ref={(password) => {this.password = password;}} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <div className="col col-md-3"></div>
            </div>
        );
    }
}

export default LoginPage;
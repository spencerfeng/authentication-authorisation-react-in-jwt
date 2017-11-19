import React, { Component } from 'react';

class LoginPage extends Component {

    render() {

        return (

            <div className="row">
                <div className="col col-md-3"></div>
                <div className="col col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <div className="col col-md-3"></div>
            </div>

        );

    }

}

export default LoginPage;
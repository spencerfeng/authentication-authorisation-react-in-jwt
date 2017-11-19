import React, { Component } from 'react';

class SignupPage extends Component {

    render() {

        return (

            <div className="row">
                <div className="col col-md-3"></div>
                <div className="col col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
                <div className="col col-md-3"></div>
            </div>

        );

    }

}

export default SignupPage;
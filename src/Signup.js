import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Footer from './Footer';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            confirmPassword: '',
            toLogin: false
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.clearPrevMessages();

        if (this.fieldsAreValid()) {
            this.userGet();
            //this.putUser();
        }
    }

    clearPrevMessages() {
        // The following error messages may or may not be there.
        document.getElementById('email-address-required').classList.remove('visible');
        document.getElementById('password-required').classList.remove('visible');
        document.getElementById('confirm-password-required').classList.remove('visible');
        document.getElementById('password-confirm-invalid').classList.remove('visible');
    }

    fieldsAreValid() {
        let emailAddressElement = document.getElementById("email-address");
        if (this.state.emailAddress.length === 0) {
            document.getElementById('email-address-required').classList.add('visible');
            emailAddressElement.focus();
            return false;
        }

        let passwordElement = document.getElementById("password");
        if (this.state.password.length === 0) {
            document.getElementById('password-required').classList.add('visible');
            passwordElement.focus();
            return false;
        }

        let confirmPasswordElement = document.getElementById("confirm-password");
        if (this.state.confirmPassword.length === 0) {
            document.getElementById('confirm-password-required').classList.add('visible');
            confirmPasswordElement.focus();
            return false;
        }

        if (this.state.password !== this.state.confirmPassword) {
            document.getElementById('password-confirm-invalid').classList.add('visible');
            passwordElement.focus();
            return false;
        }

        return true;
    }

    userGet() {
        fetch('https://30xu029kx1.execute-api.us-east-2.amazonaws.com/prod/apiuserget/'+
        this.state.emailAddress, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status !== 200) {
                alert('Unexpected Error.')
                return;
            }
            return response.json()  // Return the unpacked body.
        }).then(res => {
            if (res.Item.EmailAddress !== '') {
                let emailAddressElement = document.getElementById("email-address");
                document.getElementById('invalid-email-pass').classList.add('visible');
                emailAddressElement.focus();
            } else {
                this.putUser();
            }
        })
        .catch(function(err) {
            alert('We apologize for the unexpected error: Fetch Error :-S', err);
        });
    }

    putUser() {
        fetch('https://30xu029kx1.execute-api.us-east-2.amazonaws.com/prod/apiuserput', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  'emailAddress': this.state.emailAddress,
                                    'password': this.state.password,
                                    'provokerId': 0
                                })
        })
        .then((response) => {
            if (response.status !== 200) {
                alert('Unexpected Error, please try saving again.')
                return;
            }
            return response.json()  // Return the unpacked body.
        }).then(res => {
        })
        .catch(function(err) {
            alert('We apologize for the unexpected error: Fetch Error :-S', err);
        });

        this.setState(() => ({toLogin: true}));
    }

    render() {
        if (this.state.toLogin === true) {
            return <Redirect to='/Login'></Redirect>
        }

        return (
        <div className="mw-700 mx-auto">
            <header className="container-fluid b-header ht4">
                <div className="row">
                    <div className="col-10">
                        <dl className="mb-0 mt-soul">
                            <dt className="c-soul">SOUL</dt>
                            <dd className="italic mb-0">THERAPY</dd>
                        </dl>
                    </div>
                    <div className="col-2 mt-4 text-right">
                        <Link to="/splash" className="c-light pl-0 pr-1">Cancel</Link>
                    </div>
                </div>
            </header>
            <main>
                <h2 className="mt-4 c-soul">Sign Up</h2>
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" className="form-control" name="email-address" id="email-address"
                            value={this.state.emailAddress}
                            onChange={e => this.setState({emailAddress: e.target.value})} />
                        <div className="invalid-feedback" id="invalid-email-pass">
                            Invalid Email Address/Password combination. Please try again.
                        </div>
                        <div className="invalid-feedback" id="email-address-required">
                            Please enter Email Address
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id="password"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})} />
                        <div className="invalid-feedback" id="password-confirm-invalid">
                            Password does not match Confirm Password
                        </div>
                        <div className="invalid-feedback" id="password-required">
                            Please enter Password
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" name="confirm-password" id="confirm-password"
                            value={this.state.confirmPassword}
                            onChange={e => this.setState({confirmPassword: e.target.value})} />
                        <div className="invalid-feedback" id="confirm-password-required">
                            Please enter Confirm Password
                        </div>
                    </div>
                    <button className="btn btn-outline-primary c-soul mb-4">Sign Up</button> 
                </form>
            </main>
            <Footer />
        </div>
        );
    }
}

export default Login;
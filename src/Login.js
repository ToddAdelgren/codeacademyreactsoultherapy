import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.clearPrevMessags();

        if (this.fieldsAreValid()) {
            console.info('FIELDS ARE VALID, CALL API');
        }

    }

    clearPrevMessags() {
        // They may or may not be there.
        document.getElementById('email-address-required').classList.remove('visible');
        document.getElementById('password-required').classList.remove('visible');
    }

    fieldsAreValid() {
        let emailAddressElement = document.getElementById("email-address");
        let enteredEmailAddress = emailAddressElement.value.trim();
        if (enteredEmailAddress.length === 0) {
            document.getElementById('email-address-required').classList.add('visible');
            emailAddressElement.focus();
            return false;
        }

        let passwordElement = document.getElementById("password");
        let enteredPassword = passwordElement.value.trim();
        if (enteredPassword.length === 0) {
            document.getElementById('password-required').classList.add('visible');
            passwordElement.focus();
            return false;
        }

        return true;
    }

    render() {
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
                <h2 className="mt-4 c-soul">Login</h2>
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" className="form-control" name="email-address" id="email-address" />
                        <div className="invalid-feedback" id="inv">
                            Invalid Email Address/Password combination. Please try again.
                        </div>
                        <div className="invalid-feedback" id="email-address-required">
                            Please enter Email Address
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id="password" />
                        <div className="invalid-feedback" id="password-required">
                            Please enter Password
                        </div>
                    </div>
                    <button className="btn btn-outline-primary c-soul mb-4">Log In</button> 
                </form>
            </main>
            <Footer />
        </div>
        );
    }
}

export default Login;
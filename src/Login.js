import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Footer from './Footer';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            toJournal: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.clearPrevMessages();

        if (this.fieldsAreValid()) {
            this.logUserIn()
        }
    }

    clearPrevMessages() {
        // The following error messages may or may not be there.
        document.getElementById('email-address-required').classList.remove('visible');
        document.getElementById('password-required').classList.remove('visible');
        document.getElementById('invalid-email-pass').classList.remove('visible');
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

        return true;
    }

    logUserIn() { 
        fetch('https://30xu029kx1.execute-api.us-east-2.amazonaws.com/prod/apiuserlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"emailAddress":this.state.emailAddress,"password":this.state.password})
        })
        .then((response) => {
            if (response.status !== 200) {
                alert('Unexpected Error, please try to Login again.')
                return;
            }
            return response.json()  // Return the unpacked body.
        }).then(res => {
            if (res.Item.EmailAddress === '') {
                document.getElementById('invalid-email-pass').classList.add('visible');
                document.getElementById('email-address').focus();
                return
            }

            this.setState(() => ({toJournal: true}));
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }

    render() {
        if (this.state.toJournal === true) {
            return <Redirect to='/TermsOfUse'></Redirect>
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
                <h2 className="mt-4 c-soul">Login</h2>
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
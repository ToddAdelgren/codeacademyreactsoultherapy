import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from './Footer';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            toSignUp: false
        }

        this.signup = this.signup.bind(this);
    }

    signup() {
        this.setState(() => ({toSignUp: true}));
    }

    render() {
        if (this.state.toSignUp === true) {
            return <Redirect to='/SignUp'></Redirect>
        }

        return (
            <div className="mw-700 mx-auto">
                <header className="container-fluid b-header ht4">
                    <div className="row">
                        <div className="col-8">
                            <dl className="mb-0 mt-soul">
                                <dt className="c-soul">SOUL</dt>
                                <dd className="italic mb-0">THERAPY</dd>
                            </dl>
                        </div>
                        <div className="col-2 mt-4 text-right">
                            <Link to="/Login" className="c-light">Login</Link>          
                        </div>
                        <div className="col-2 mt-4">
                            <Link to="/SignUp" className="c-light">Sign Up</Link>
                        </div>
                    </div>
                </header>
                <main>
                    <p className="mt-4 px-4">Soul Therapy is a daily, interactive journal designed to aid you in self exploration, healing, and reflection. Featuring thought provoking prompts, inspiring quotes, open-ended questions, daily practices, and motivational soul food with room for writing, this journal is the ultimate tool for personal growth.</p>
                    <p className="mt-4 px-4">The countless positive benefits you will receive from this journal will transform your life. This journal is designed to help you thrive and realize your great potential.</p>
                    <p className="mt-4 mb-5 px-4 c-light">Join the thousands of people around the world who have transformed their lives through this journal!</p>
                    <div className="container">
                        <div className="card-deck mb-3 text-center">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">Free</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>10 days included</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button className="btn btn-lg btn-block btn-outline-primary c-soul" onClick={this.signup}>Sign up for free</button>
                                </div>
                            </div>
                            <div className="card mb-4 shadow-sm">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">Pro</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Unlimited days included</li>
                                        <li>Priority email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button className="btn btn-lg btn-block">Coming Soon!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Splash;
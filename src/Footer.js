import React from 'react';
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

class Footer extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <Route path="/termsofuse" component={TermsOfUse}/>
                    <Route path="/privacypolicy" component={PrivacyPolicy}/>
                </div>
                <div className="container-fluid bt ht4">
                    <div className="row text-center mt-4">
                        <div className="col-4">
                            Copy Right 2020
                        </div>
                        <div className="col-4">
                            <NavLink to="/termsofuse">Terms Of Use</NavLink>
                        </div>
                        <div className="col-4">
                            <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Footer;
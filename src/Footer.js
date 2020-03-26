import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid b-footer ht4">
                <div className="row text-center mt-4">
                    <div className="col-4">
                        Copy Right 2020
                    </div>
                    <div className="col-4">
                        <Link to="/termsofuse">Terms Of Use</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/privacypolicy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
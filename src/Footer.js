import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid bt ht4">
                    <div className="row text-center mt-4">
                        <div className="col-4">
                            Copy Right 2020
                        </div>
                        <div className="col-4">
                            <Link to="">Terms Of Use</Link>
                        </div>
                        <div className="col-4">
                            <Link to="">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Footer;
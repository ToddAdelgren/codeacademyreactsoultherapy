import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    render() {
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
            </div>
        )
    }
}

export default Splash;
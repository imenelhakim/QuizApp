import React, { Fragment } from 'react';

//change page title with helmet
import  { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

const Home = ()=>(
    <Fragment>
        <Helmet><title>Quiz app - Home</title></Helmet>
        <div id="home">
            <section>
                <div style={{textAlign:'center'}}>  {/*center the element */}
                    <span className="mdi mdi-cube-outline mdi-48px cube"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link className="auth-buttons" id="login-button" to="/login">Login</Link>
                    <Link className="auth-buttons" id="signup-button" to="/register">Register</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;
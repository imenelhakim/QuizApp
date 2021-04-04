import React, { Fragment } from 'react';

//change page title with helmet
import  { Helmet } from 'react-helmet';

const Home = ()=>(
    <Fragment>
        <Helmet><title>Quiz app - Home</title></Helmet>
        <div id="home">
            <section>
                <div>
                    <span className="mdi mdi-cube-outline"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">

                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;
import React from 'react';
import PublicNavBar from '../components/layout/PublicNavBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Public() {
    return (
        <React.Fragment>
            <PublicNavBar />
            <Header />
            <div style={{paddingTop: "500px"}}></div>
            <Footer />
        </React.Fragment>
    )
}

export default Public;

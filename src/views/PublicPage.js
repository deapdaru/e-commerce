import React from 'react';
import PublicNavBar from '../components/layout/PublicNavBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Public() {
    return (
        <div>
            <PublicNavBar />
            <Header />
            <div style={{paddingTop: "500px"}}></div>
            <Footer />
        </div>
    )
}

export default Public;

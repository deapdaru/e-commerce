import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginNavBar from '../components/layout/LoginNavBar';
import LoginCard from '../components/layout/LoginCard';

function Login(props) {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(localStorage.getItem("isAuthenticated"));
    if (redirectToReferrer === 'true') {
        return (
            <Redirect to="/shop" />
        )
    } else {
        return (
            <React.Fragment>
                <LoginNavBar />
                <LoginCard setRedirectToReferrer={setRedirectToReferrer} authenticate={props.authenticate} />
            </React.Fragment>
        )
    }
}

export default Login;

import React from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
    // console.log(redirectToReferrer);

    const login = () => {
        props.fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        })
    }

    if (redirectToReferrer) {
        return (
            <Redirect to="/protected" />
        )
    }

    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;

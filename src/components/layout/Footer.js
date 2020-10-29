import React from 'react';

const footerStyle = {
    textAlign: "center",
    padding: "15px"
}

function Footer() {
    return (
        <footer style={footerStyle}>
            <code>
                Made using React (create-react-app), React Routers (react-route-dom),<br/>
                By Deap Daru.
            </code>
        </footer>
    )
}

export default Footer;

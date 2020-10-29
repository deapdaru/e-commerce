import React from 'react';
import { theme } from '../theme/theme';

const headerStyle = {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: "40px",
    fontSize: "1.2em"
}

function Header() {
    return (
        <div style={headerStyle}>
            <h1>eCommerce Site</h1>
            <p>One of its kind.<br/>
            Bringing you smoother user expierence than ever before.</p>
        </div>
    )
}

export default Header;

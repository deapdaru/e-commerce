import React from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }
}));

function PublicNavBar() {
    const classes = useStyles();

    const linkStyle = {
        textDecoration: "none",
        color: "#ffffff"
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    eCommerce
                </Typography>
                <Link to="/login" style={linkStyle}><Button color="inherit">Login</Button></Link>
                <Link to="/protected" style={linkStyle}><Button color="inherit">Protected</Button></Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </ThemeProvider>
    )
}

export default PublicNavBar;

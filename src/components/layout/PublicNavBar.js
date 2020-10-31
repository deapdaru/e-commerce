import React from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';

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
                    <Link to="/login" style={linkStyle}><Button size="large" color="inherit" startIcon={<AccountCircle/>}>Login</Button></Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </ThemeProvider>
    )
}

export default PublicNavBar;

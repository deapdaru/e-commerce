import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    }
}));

function CartNavBar(props) {
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
                    <Typography variant="h4" className={classes.title}>
                        My Cart
                    </Typography>
                    <Link to="/shop" style={linkStyle}><Button variant="text" size="large" color="inherit" endIcon={<ShoppingCart/>}>Shop</Button></Link>
                    <Link to="/" style={linkStyle}><Button variant="text" size="large" color="inherit" endIcon={<AccountCircle/>} onClick={props.logout}>Logout</Button></Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </ThemeProvider>
    )
}

export default CartNavBar;

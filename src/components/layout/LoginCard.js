import React from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardHeader, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    grid: {
        marginTop: "20px"
    },
    formControl: {
        width: "60%",
        margin: "10px auto 0"
    }
}))

function LoginCard(props) {
    const classes = useStyles();
    const login = () => {
        props.authenticate(() => {
            props.setRedirectToReferrer(localStorage.getItem("isAuthenticated"));
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.grid}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                    <Card>
                        <CardContent>
                            <CardHeader title="Login" />
                            <form noValidate>
                                <Grid container>
                                    <TextField 
                                        label="Email" 
                                        variant="filled"
                                        className={classes.formControl}
                                        defaultValue="deapdaru@gmail.com"/>
                                    <TextField 
                                        label="Password" 
                                        variant="filled"
                                        className={classes.formControl}
                                        defaultValue="deap"/>
                                    <Button 
                                        variant="outlined" 
                                        color="secondary" 
                                        className={classes.formControl}
                                        onClick={login}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1} md={3}></Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default LoginCard;

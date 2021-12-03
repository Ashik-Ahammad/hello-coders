import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../../images/login.jpg';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, sigInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        sigInWithGoogle(location, history)
    }


    return (
        <Container >
            <Grid container spacing={2} sx={{ py: 25 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" color="navy" gutterBottom>
                        <i class="fas fa-user-circle"></i>  Login
                    </Typography>

                    <Button onClick={handleGoogleSignIn} sx={{ width: '62%', m: 1, color: 'navy', background: "white" }} type="submit" variant="contained" >
                        <i class="fab fa-google"></i>&nbsp;  SIGN IN WITH GOOGLE
                    </Button>

                    <Typography sx={{ color: 'navy' }}>OR</Typography>

                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-basic" label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            required
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            required
                        />

                        <Button sx={{ width: '62%', m: 1, background: "white", color: 'navy' }} type="submit" variant="contained">
                            LOGIN &nbsp;<i class="fas fa-sign-in-alt"></i>
                        </Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button sx={{ color: 'navy' }} variant="text">New user? Please Register</Button>
                        </NavLink>

                    </form>
                    {isLoading && <CircularProgress />
                    }{user?.email && <Alert severity="success">Congrats Successfully Log in</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ marginTop: '' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
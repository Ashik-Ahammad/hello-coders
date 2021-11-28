import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <Container >
            <Grid container spacing={2} sx={{ py: 25 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" color="navy" gutterBottom>
                        <i class="fas fa-user-circle"></i>  Login
                    </Typography>

                    <Button sx={{ width: '62%', m: 1, color: 'navy', background: "white" }} type="submit" variant="contained" >
                        <i class="fab fa-google"></i>&nbsp;  SIGN IN WITH GOOGLE
                    </Button>

                    <Typography sx={{ color: 'navy' }}>OR</Typography>

                    <form onSubmit="">

                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-basic" label="Email"
                            name="email"
                            onBlur=""
                            required
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur=""
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <Container >
            <Grid container sx={{ py: 25 }} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src=""
                        width="100px" alt="" />
                    <Typography variant="body1" color="red" gutterBottom>
                        Register
                    </Typography>
                    <form >
                        <TextField
                            sx={{ width: '62%', m: 1 }}

                            label="Your Name"
                            name="name"
                            onBlur=""
                            variant="standard" />

                        <TextField
                            sx={{ width: '62%', m: 1 }}

                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur=""
                            variant="standard" />
                        <TextField
                            sx={{ width: '62%', m: 1 }}

                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur=""
                            variant="standard" />
                        <TextField
                            sx={{ width: '62%', m: 1 }}

                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur=""
                            variant="standard" />

                        <Button sx={{ width: '62%', m: 1 }} type="submit" variant="contained">
                            SIGN UP
                        </Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
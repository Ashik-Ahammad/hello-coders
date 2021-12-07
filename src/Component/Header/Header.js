import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Header = () => {

    const { user, logOut } = useAuth();


    return (
        <div>
            <>
                <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand href="/"><img width="300px" height="80px" src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle className=" toggle-color" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="nav-style" as={HashLink} to="/home">HOME</Nav.Link>
                            <Nav.Link className="nav-style" as={HashLink} to="/services">SERVICES</Nav.Link>
                            <Nav.Link className="nav-style" as={HashLink} to="/aboutus">ABOUT US</Nav.Link>
                            <Nav.Link className="nav-style" as={HashLink} to="/contact">CONTACT</Nav.Link>

                            {
                                user?.email ?

                                    <Button onClick={logOut} sx={{ color: 'navy' }} className="uptext"><i class="fas fa-sign-in-alt"></i>&nbsp; Logout</Button>

                                    :

                                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                                        <Button sx={{ color: 'navy' }} className="uptext"><i class="fas fa-sign-in-alt"></i>&nbsp; Login</Button>
                                    </NavLink>
                            }

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;
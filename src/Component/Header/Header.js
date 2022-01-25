import React, { useState } from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Header = () => {

    const { user, logOut } = useAuth();
    const[navbar,setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div>
            <>
                <Navbar variant="dark" fixed="top" collapseOnSelect expand="lg" className={navbar ? 'navbar active' : 'navbar'} >
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

                                
                                
                                    <Button onClick={logOut} sx={{ color: '#00A1C4' }} className="uptext"><i class="fas fa-sign-in-alt"></i>&nbsp; Logout</Button>

                                    :

                                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                                        <Button sx={{ color: '#00A1C4' ,fontWeight:'bold'}} className="uptext"><i class="fas fa-sign-in-alt"></i>&nbsp; Login</Button>
                                    </NavLink>
                            }

                            <Nav.Link className="nav-style" as={HashLink} to="/orders"><i class="fas fa-cart-plus"></i></Nav.Link>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;
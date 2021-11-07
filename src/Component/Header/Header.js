import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css';



const Header = () => {
    return (
        <div>
            <>
                <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand href="/"><img width="300px" height="80px" src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle className="bg-secondary" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="nav-style" as={HashLink} to="/home">HOME</Nav.Link>
                            <Nav.Link className="nav-style" as={HashLink} to="/services">SERVICES</Nav.Link>
                            <Nav.Link className="nav-style" as={HashLink} to="/aboutus">ABOUT US</Nav.Link>
                            <Nav.Link className="nav-style" as={HashLink} to="/contact">CONTACT</Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;
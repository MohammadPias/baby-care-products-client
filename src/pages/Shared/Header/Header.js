import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="140"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
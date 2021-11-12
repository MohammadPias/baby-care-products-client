import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import userImage from '../../../images/user.jpg'
import './NavTitle.css'
import useAuth from '../../Context/useAuth';

const NavTitle = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div>
            <Navbar bg="transparent" collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="160"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navLink">
                            <Nav.Link className="navLinks" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="navLinks" as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link className="navLinks" as={Link} to="/products">Products</Nav.Link>
                            {!user?.email ?
                                <Nav.Link className="navLinks" as={Link} to="/login" >Login</Nav.Link>

                                : <Button onClick={handleSignOut} className="btn-custom rounded-pill">Sign Out</Button>}
                            {user?.email &&
                                <Nav.Link as={Link} to="#">Hey! {user?.displayName?.split(" ")[0]}</Nav.Link>}
                            {user?.photoURL === null && user?.email ?
                                <div className="user-image"><img src={userImage} alt="" /></div>
                                :
                                <div className="user-image"><img src={user?.photoURL} alt="" /></div>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavTitle;
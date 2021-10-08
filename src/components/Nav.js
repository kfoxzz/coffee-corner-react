import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Container>
            <Navbar bg="white" expand="md" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="coffeeCornerNavbar" />
                    <Navbar.Collapse id="coffeeCornerNavbar">
                        <Nav className="text-dark">
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/home">HOME</Link>
                            </Nav.Link>
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/about">ABOUT</Link>
                            </Nav.Link>
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/menu">MENU</Link>
                            </Nav.Link>
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/memberships">MEMBERSHIPS</Link>
                            </Nav.Link>
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/shop">SHOP</Link>
                            </Nav.Link>
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/locations">LOCATIONS</Link>
                            </Nav.Link>
                            <Nav.Link className="zoom">
                                <Link className="link-unstyled" to="/contact">CONTACT</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Navigation;
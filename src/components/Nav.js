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
                            <Nav.Link as={Link} to="/" className="zoom link-unstyled">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="zoom link-unstyled">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/menu" className="zoom link-unstyled">MENU</Nav.Link>
                            <Nav.Link as={Link} to="/memberships" className="zoom link-unstyled">MEMBERSHIPS</Nav.Link>
                            <Nav.Link as={Link} to="/shop" className="zoom link-unstyled">SHOP</Nav.Link>
                            <Nav.Link as={Link} to="/locations" className="zoom link-unstyled">LOCATIONS</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="zoom link-unstyled">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Navigation;
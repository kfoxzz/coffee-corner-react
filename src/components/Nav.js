import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Container>
            <Navbar bg="white" expand="md" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="coffeeCornerNavbar" />
                    <Navbar.Collapse id="coffeeCornerNavbar">
                        <Nav className="text-dark">
                            <Nav.Link className="zoom" href="/">HOME</Nav.Link>
                            <Nav.Link className="zoom" href="/">ABOUT</Nav.Link>
                            <Nav.Link className="zoom" href="/">MENU</Nav.Link>
                            <Nav.Link className="zoom" href="/">MEMBERSHIPS</Nav.Link>
                            <Nav.Link className="zoom" href="/">SHOP</Nav.Link>
                            <Nav.Link className="zoom" href="/">LOCATIONS</Nav.Link>
                            <Nav.Link className="zoom" href="/">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Navigation;
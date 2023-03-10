import React from "react";

import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
    const expand = "xl"
    return <Navbar bg="light" expand={expand} >
        <Container fluid>
            <Navbar.Brand as={Link} to="/">DeckHelper</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Offcanvas
                id="navbar"
                aria-labelledby="navbar"
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="navbar">
                        Deck Helper
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as={Link} to="/decks">Decks</Nav.Link>
                        <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
}
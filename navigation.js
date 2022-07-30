import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation (props) {
        return (
            <div className="navbar-class container rounded mx-auto" >
                <Navbar>
                    <Container> 
                        <Navbar.Brand className="nav-bar-title" href="/"> <strong>Hire-A-Hero</strong></Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Home </Link>
                            <Link to="/heroes" className="nav-link">Heroes </Link>
                            <Link to="/events" className="nav-link">Events </Link>
                            <Link to="/powers" className="nav-link">Powers</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )

}

export default Navigation;




import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    
    return (
            <Navbar className="py-5" expand="lg">
                <LinkContainer to="/">
                <Navbar.Brand>
                    <h2 className="ml-5 text-success">
                        RESCORED
                    </h2>
                </Navbar.Brand>
                </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavDropdown
                    title={
                        <span className="text-success my-auto">Credit Cards</span>
                    } 
                    id="collasible-nav-dropdown" 
                    className="mr-3 text-success"
                >
                    <LinkContainer to="/cards">
                        <NavDropdown.Item className="text-success dropdown--link">
                            Action
                        </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Another action
                    </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Something
                    </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Separated link
                    </NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>

                <NavDropdown title={
                    <span className="text-success my-auto">
                        Secured Cards
                    </span>
                    }  
                    id="collasible-nav-dropdown"
                >
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Action
                    </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Another action
                    </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Something
                    </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/cards">
                    <NavDropdown.Item className="text-success dropdown--link">
                        Separated link
                    </NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                </Nav>
                
                <Nav className="ml-5" />
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;

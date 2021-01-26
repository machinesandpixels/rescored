import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    
    return (
            <Navbar className="py-5" expand="lg">
                <Navbar.Brand href="#home">
                    <h2 className="ml-5 text-success">
                        RESCORED
                    </h2>
                </Navbar.Brand>
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
                    <NavDropdown.Item className="text-success" href="#action/3.1">
                        Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={
                        <span className="text-success my-auto">Secured Cards</span>
                    }  id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav className="ml-5" />
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;

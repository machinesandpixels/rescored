import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    
    return (
        <Fragment>
            <Navbar className="py-5">
                <Nav className="m-auto">
                <Nav.Link href="#home">
                     Credit Cards
                </Nav.Link>
                </Nav>
                <Navbar.Brand href="#home">
                    <h2 className="ml-5 text-success">
                        RESCORED
                    </h2>
                </Navbar.Brand>
                <Nav className="m-auto">
                <NavDropdown title="Secured Cards" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                </Nav>

                <Nav>
            
        
                
              
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default Header;

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({ cards }) => {

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
                        <span className="text-success my-auto">
                            Credit Cards
                        </span>
                    } 
                    id="collasible-nav-dropdown" 
                    className="mr-3 text-success"
                >
                 {  cards.filter(card => !card.securedCard).map(card => (
                      <LinkContainer key={card.id} to={{
                        pathname: `/card/${card.id}`,
                        data: card
                    }}>
                      <NavDropdown.Item  className="text-success dropdown--link">
                          { card.name }
                      </NavDropdown.Item>
                   </LinkContainer>
                    ))
                 }
                </NavDropdown>

                <NavDropdown title={
                    <span className="text-success my-auto">
                        Secured Cards
                    </span>
                    }  
                    id="collasible-nav-dropdown"
                >
                {  cards.filter(card => card.securedCard).map(card => (
                      <LinkContainer key={card.id} to={{
                        pathname: `/card/${card.id}`,
                        data: card
                    }}>
                      <NavDropdown.Item  className="text-success dropdown--link">
                          { card.name }
                      </NavDropdown.Item>
                   </LinkContainer>
                    ))
                 }
                </NavDropdown>
                </Nav>
                <Nav className="ml-5" />
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;

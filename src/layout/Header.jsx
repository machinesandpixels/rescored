import React, { useContext } from 'react';
import { CreditCardsContext } from '../context/CreditCardsContext';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const { cards } = useContext(CreditCardsContext);

    return (
            <Navbar className="hh py-5" expand="lg">
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
                      <LinkContainer key={card.id} 
                        to={`/card/${card.id}`} 
                        state={{creditCard: card}}
                        >
                      <NavDropdown.Item id="dropdown--container"  className="text-success dropdown--link">
                          { card.name }
                      </NavDropdown.Item>
                   </LinkContainer>
                    ))
                 }
                </NavDropdown>

                {/* <NavDropdown title={
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
                      <NavDropdown.Item id="dropdown--container"  className="text-success dropdown--link">
                          { 
                            card.name.includes("Merrick") || 
                            card.name.includes("Chime") ||
                            card.name.includes("Self") ?
                                card.name.slice(0, 20)
                            : 
                                card.name.slice(0, 15)  
                        }
                      </NavDropdown.Item>
                   </LinkContainer>
                    ))
                 }
                </NavDropdown> */}
                </Nav>
                <Nav className="ml-5" />
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;

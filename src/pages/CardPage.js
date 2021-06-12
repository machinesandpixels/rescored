import React from 'react';
import { Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Footer from '../layout/Footer';

const CardPage = (props) => {
    
    const card = props.location.data;
    
    return (
        <div>
            { card ? 
            <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Card key={card.id} className="my-3 p-3 rounded" style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={`/${card.image}`} />
                        <Card.Body>
                            <Card.Title>{ card.name }</Card.Title>
                            <Card.Header>Annual Fee</Card.Header>
                            <Card.Header>${ card.annualFee }</Card.Header>
                            <Card.Header className="mt-3">APR</Card.Header>
                            <Card.Header>{ card.apr }%</Card.Header>
                            <Button href={card.link} className="d-flex      justify-content-center mt-3" variant="outline-success">
                                Apply
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container> : <Redirect to='/'  /> 
            }
        </div>
    )
}

export default CardPage;

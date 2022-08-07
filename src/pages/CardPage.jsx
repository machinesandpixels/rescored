import React from 'react';
import { useLocation } from "react-router-dom";
import BackButton from '../components/BackButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardPage = () => {
    
    const location = useLocation();
    const { creditCard } = location.state;
    
    return (
        <div>
            { creditCard ? 
            <div>
            <BackButton />
            <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Card key={creditCard.id} className="my-3 p-3 rounded" style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={`/${creditCard.image}`} />
                        <Card.Body>
                            <Card.Title>{ creditCard.name }</Card.Title>
                            <Card.Header>Annual Fee</Card.Header>
                            <Card.Header>${ creditCard.annualFee }</Card.Header>
                            <Card.Header className="mt-3">APR</Card.Header>
                            <Card.Header>{ creditCard.apr }%</Card.Header>
                            <Button href={creditCard.link}
                            target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center mt-3" variant="outline-success">
                                Apply
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container> 
            </div> : ''
            // <Redirect to='/'  /> 
            }
        </div>
    )
}

export default CardPage;

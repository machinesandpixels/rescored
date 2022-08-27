import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardIndexPage = () => {

    const location = useLocation();
    const { creditCards } = location.state;
   
    return (
        <div>
            <BackButton />
            <Container>
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={4} xl={3}>
                { creditCards ? creditCards.map(card => (
                     <Card key={card.id} className="my-3 p-3 rounded" style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={card.image} />
                     <Card.Body>
                     <Card.Title>{ card.name }</Card.Title>
                     <Card.Header>Annual Fee</Card.Header>
                     <Card.Header>${ card.annualFee }</Card.Header>
                     <Card.Header className="mt-3">APR</Card.Header>
                     <Card.Header>{ card.apr }%</Card.Header>
                     <Button href={card.link} target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center mt-3" variant="outline-success">
                         Apply
                     </Button>
                     </Card.Body>
                     </Card>
                )) : 
                    ''
                }
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default CardIndexPage;

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import BackButton from '../components/BackButton';
import Footer from '../layout/Footer';

const Cards = (props) => {

    const data = props.location.data;
    // const [value, setValue] = useState('100');
    // const [value, setValue] = useState(data);
    
    // localStorage.setItem('myV', 'test');
    // const result = localStorage.getItem('myV');
    // console.log('.......');
    // console.log(result);

    // localStorage.setItem('myV', JSON.stringify(data));
    // const result = localStorage.getItem('myV');
    // console.log('.......');
    // console.log(JSON.parse(result));
//   const onChange = event => {
//     localStorage.setItem('myValueInLocalStorage', event.target.value);
 
//     setValue(event.target.value);
//   };

    return (
        <div>
            <BackButton />
            <Container>
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={4} xl={3}>
                { data ? data.map(card => (
                     <Card key={card.id} className="my-3 p-3 rounded" style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={card.image} />
                     <Card.Body>
                     <Card.Title>{ card.name }</Card.Title>
                     <Card.Header>Annual Fee</Card.Header>
                     <Card.Header>${ card.annualFee }</Card.Header>
                     <Card.Header className="mt-3">APR</Card.Header>
                     <Card.Header>{ card.apr }%</Card.Header>
                     <Button href={card.link} className="d-flex justify-content-center mt-3" variant="outline-success">
                         Apply
                     </Button>
                     </Card.Body>
                     </Card>
                )) : <Redirect to='/'  /> }
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Cards;

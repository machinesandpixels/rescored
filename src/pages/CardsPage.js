import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Footer from '../layout/Footer';

const Cards = (props) => {

    const data = props.location.data;
    const [value, setValue] = useState('100');

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
            <Link to="/">
                <Button variant="outline-success ml-5">
                    Back 
                </Button>
            </Link>
            <Container>
                {/* { 
                    console.log(props.location.data)
                } */}
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={4} xl={3}>
                { data ? data.map(card => (
                     <Card key={card.id} className="my-3 p-3 rounded" style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={card.image} />
                     <Card.Body>
                     <Card.Title>{ card.name }</Card.Title>
                     {/* <Card.Subtitle>Apr:{card.apr}</Card.Subtitle> */}
                     {/* <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup> */}
                     <Button href={card.link} className="d-flex justify-content-center" variant="outline-success">
                         Apply
                     </Button>
                     </Card.Body>
                     </Card>
                )) : '' }
                </Col>
            </Row>
            </Container>
            {/* <Row>
                <Col sm={12} md={6} lg={4} xl={3}>
                </Col>
            </Row> */}
            {/* <Footer /> */}
        </div>
    )
}

export default Cards;

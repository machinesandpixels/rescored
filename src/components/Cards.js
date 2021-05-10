import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../layout/Footer';

const Cards = (props) => {
    return (
        <div>
            <Link to="/">
                <Button variant="outline-success ml-5">
                    Back 
                </Button>
            </Link>
            <Container>
                { 
                    console.log(props.location.data)
                }
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={4} xl={3}>
                <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the cardtitle and make  up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="outline-success">
                    Go somewhere
                </Button>
                </Card.Body>
                </Card>
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

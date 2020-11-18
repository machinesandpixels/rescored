import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';


const HomePage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                    <Jumbotron className="text-center">
                        <Container>
                        <h1 className="text-wrap text-truncate">
                            Fluid jumbotron
                        </h1>
                        <p className="text-wrap text-truncate">
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                        
                        </Container>
                    </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;

import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import CategoriesPanel from '../components/CategoriesPanel';


const HomePage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={8}>
                    <Jumbotron className="text-center col-lg-offset-x">
                        <Container>
                        <h1 className="text-wrap text-truncate text-success">
                            Rebuild your Credit Score
                        </h1>
                        <CategoriesPanel />
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

import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CategoriesPanel from '../components/CategoriesPanel';


const HomePage = () => {
    return (
        <div>  
            <Jumbotron className="text-center col-8 m-auto">
                <Container>
                    <h1 className="text-wrap text-truncate text-success">
                        Rebuild your Credit Score
                    </h1>
                    <p className="text-wrap text-truncate">
                        This is a modified jumbotron thatoccupies the entire horizontal spaceof
                        its parent.
                    </p>
                    <CategoriesPanel />
                    </Container>
            </Jumbotron>    
        </div>
    )
}

export default HomePage;

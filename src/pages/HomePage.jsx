import React from 'react';
import Container from 'react-bootstrap/Container';
import CategoriesPanel from '../components/CategoriesPanel';

const HomePage = ({ cards }) => {

    return (
        <main> 
            <Container className="text-center col-6 m-auto">
                <h1 className="text-wrap text-truncate text-success my-4">
                    Rebuild your Credit Score
                </h1>
                <p className="text-wrap text-truncate text-success">
                    Select your card today
                </p>
                <CategoriesPanel cards={ cards } />
            </Container>
        </main>
    )
}

export default HomePage;

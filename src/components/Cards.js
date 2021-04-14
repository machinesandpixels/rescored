import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from '../layout/Footer';

const Cards = () => {
    return (
        <div>
            <Link to="/">
                <Button variant="outline-success">
                    Back 
                </Button>
            </Link>
            <p>Cards</p>
            <Footer />
        </div>
    )
}

export default Cards;

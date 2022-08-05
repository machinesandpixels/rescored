import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BackButton = () => {
    return (
        <Link to="/">
            <Button className="btn--margin" variant="outline-success">
                Back 
            </Button>
        </Link>
    )
}

export default BackButton;

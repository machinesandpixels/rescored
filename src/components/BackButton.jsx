import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();
    const returnToHomePage = () => {
        navigate("/", { replace: true });
    };

    return (
        <Button 
            onClick={returnToHomePage} 
            className="btn--margin" 
            variant="outline-success">
                Back 
        </Button>
    )
}

export default BackButton;

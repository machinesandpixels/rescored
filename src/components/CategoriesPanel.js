import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = ({ cards }) => {

    return (
        <div className="my-4">
             { console.log(cards) }
            <Link to="/cards">
                <Button variant="outline-warning" className="mr-3">
                    Fair Credit: 689 - 630 
                </Button>
            </Link>
            
            <Link to="/cards">
                <Button variant="outline-danger" className="mr-3">
                    Bad Credit: 620 - 350
                </Button>
            </Link>
            <Link to="/cards">
                <Button className="lt--credit" variant="outline-info">
                    Limited Credit
                </Button>
            </Link> 
           
        </div>
    )
}

export default CategoriesPanel;

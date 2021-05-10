import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = ({ cards }) => {

    let fairCredit = [];
    let badCredit = [];
    let limitedCredit = [];
    
    { 
        cards.map(card => {

            if (card.fairCredit) {
                fairCredit.push(card);
            }
            if (card.badCredit) {
                badCredit.push(card);
            }
            if (card.limitedCredit) {
                limitedCredit.push(card);
            }

        });
    }

    return (
        <div className="my-4">
            
            <Link to={{
                pathname: '/cards',
                data: fairCredit
            }}>
                <Button variant="outline-warning" className="mr-3">
                    Fair Credit: 689 - 630 
                </Button>
            </Link>
            <Link to={{
                pathname: '/cards',
                data: badCredit
            }}>
                <Button variant="outline-danger" className="mr-3">
                    Bad Credit: 620 - 350
                </Button>
            </Link>
            <Link to={{
                pathname: '/cards',
                data: limitedCredit
            }}>
                <Button className="lt--credit" variant="outline-info">
                    Limited Credit
                </Button>
            </Link> 
           
        </div>
    )
}

export default CategoriesPanel;

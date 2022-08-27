import React, { useContext } from 'react';
import { CreditCardsContext } from '../context/CreditCardsContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = () => {

    const { 
        fairCredit, 
        badCredit, 
        limitedCredit  
    } = useContext(CreditCardsContext);
    
    return (
        <div className="my-4">
            <Link to='/cards' state={{creditCards: fairCredit}}>
                <Button variant="outline-warning" className="mr-3">
                    Fair Credit: 689 - 630 
                </Button>
            </Link>
            <Link to='/cards' state={{creditCards: badCredit}}>
                <Button variant="outline-danger" className="mr-3">
                    Bad Credit: 620 - 350
                </Button>
            </Link>
            <Link to='/cards' state={{creditCards: limitedCredit}}>
                <Button className="lt--credit" variant="outline-info">
                    Limited Credit
                </Button>
            </Link> 
        </div>
    )
}

export default CategoriesPanel;

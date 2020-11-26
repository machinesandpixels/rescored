import React from 'react';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = () => {
    return (
        <div className="my-4">
            <Button variant="outline-warning" className="mr-3">
                Fair Credit: 689 - 630
            </Button>
            <Button variant="outline-danger" className="mr-3">
                Bad Credit: 620 - 350
            </Button> 
            <Button variant="outline-info">
                Limited Credit
            </Button>
        </div>
    )
}

export default CategoriesPanel;

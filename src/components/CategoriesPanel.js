import React from 'react';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = () => {
    return (
        <div className="categories-panel my-4">
            <Button variant="outline-warning" className="mr-3">
                Fair Credit: 
            </Button>
            <Button variant="outline-danger" className="mr-3">
                Bad Credit: 
            </Button> 
            <Button variant="outline-info">
                Limited Credit
            </Button>
        </div>
    )
}

export default CategoriesPanel;

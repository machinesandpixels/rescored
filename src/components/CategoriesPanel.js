import React from 'react';
import Button from 'react-bootstrap/Button'

const CategoriesPanel = () => {
    return (
        <div className="categories-panel my-4">
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>
        </div>
    )
}

export default CategoriesPanel;

import React from 'react';
import { Redirect } from "react-router-dom";

const CardPage = (props) => {
    
    const card = props.location.data;
    
    return (
        <div>
            CARD PAGE
            { card ? console.log(card.name) : <Redirect to='/'  /> }
        </div>
    )
}

export default CardPage;

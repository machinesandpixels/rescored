import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CategoriesPanel = () => {

    const [cards, setCards] = useState([]);

    const getCards = () => {
        fetch('data/creditCards.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(response => {
              if(!response.ok){
                  throw new Error(`Status Code Error: ${response.status}`)
              }
            console.log(response)
            return response.json();
          })
          .then(myJson => {
            console.log(myJson);
            setCards(myJson)
          })
          .catch(err => {
              console.log(`Error Message: ${err}`)
          });
      }
      useEffect(()=>{
        getCards()
      },[])

    return (
        <div className="my-4">
            
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
          
            {cards.map(card => (
                  console.log(card.image)
                //   col=key={card.id}
                ))}
        </div>
    )
}

export default CategoriesPanel;

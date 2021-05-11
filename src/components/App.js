import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Header from '../layout/Header';
import HomePage from '../pages/HomePage';
import CardsPage from '../pages/CardsPage';

const App = () => {

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
            // console.log(myJson);
            setCards(myJson)
          })
          .catch(err => {
              console.log(`Error Message: ${err}`)
          });
      }

      useEffect( () => {
        getCards()
      },[])

  return(
    <div>
      <Router>
          <Header cards={ cards } />
          <Route
            exact
            path='/'
            render={ () => (
              <HomePage cards={ cards } />
            )}
          />
          <Route path="/cards" component={ CardsPage } />
          {/* <Route path="/cards/:id" component={ Cards } /> */}
      </Router>
    </div>
  ) 
}

export default App;
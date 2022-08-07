import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import axios from 'axios';
import Header from '../layout/Header';
import HomePage from '../pages/HomePage';
import CardPage from '../pages/CardPage';
import CardsPage from '../pages/CardsPage';

const App = () => {

  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      const { data } = await axios("data/creditCards.json");
      setCards(data);
    } catch (err) {
      throw new Error('Unable to make request')
    }
  }
    
  useEffect( () => {
    getCards();
  },[]);

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
          <Route path="/card/:id" component={ CardPage } />
      </Router>
    </div>
  ) 
}

export default App;
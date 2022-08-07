import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';
import { CreditCardsProvider } from '../context/CreditCardsContext';
import Header from '../layout/Header';
import HomePage from '../pages/HomePage';
import CardPage from '../pages/CardPage';
import CardsPage from '../pages/CardsPage';

const App = () => {

  return(
      <CreditCardsProvider>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path="/cards" element={ <CardsPage /> } />
          <Route path="/card/:id" element={ <CardPage /> } />
        </Routes>
      </Router>
      </CreditCardsProvider>
  ) 
}

export default App;
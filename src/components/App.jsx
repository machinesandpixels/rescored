import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { CreditCardsProvider } from '../context/CreditCardsContext';
import Header from '../layout/Header';
import HomePage from '../pages/HomePage';
import CardDetailsPage from '../pages/CardDetailsPage';
import CardIndexPage from '../pages/CardIndexPage';

const App = () => {
 
  return(
      <CreditCardsProvider>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path="/cards" element={ <CardIndexPage /> } />
          <Route path="/card/:id" element={ <CardDetailsPage /> } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      </CreditCardsProvider>
  ) 
}

export default App;
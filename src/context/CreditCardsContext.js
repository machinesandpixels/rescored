import React, { 
  createContext,  
  useEffect, 
  useState 
} from "react";
import axios from 'axios';

const CreditCardsContext = createContext();

const CreditCardsProvider = ({ children }) => {
    
  const [cards, setCards] = useState([]);

  useEffect( () => {
    const getCards = async ()  => {
      try {
        const { data } = await axios("data/creditCards.json");
        setCards(data);
      } catch (err) {
        throw new Error('Unable to make request')
      }
    }
    getCards();
  },[]);

    return (
      <CreditCardsContext.Provider value={{ cards }}>
        {children}
      </CreditCardsContext.Provider>
    );
  };

export { CreditCardsContext, CreditCardsProvider };
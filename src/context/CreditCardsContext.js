import React, { 
  createContext,  
  useEffect, 
  useState 
} from "react";
import axios from 'axios';

const CreditCardsContext = createContext();

const CreditCardsProvider = ({ children }) => {
  
  const [creditCards, setCreditCards] = useState([]);

  useEffect( () => {
    const getCards = async ()  => {
      try {
        const { data } = await axios("data/creditCards.json");
        setCreditCards(data);
      } catch (err) {
        throw new Error('Unable to make request')
      }
    }
    getCards();
  },[]);

  let fairCredit = [];
  let badCredit = [];
  let limitedCredit = [];

// Create a new array of Objects for Fair, Bad, and Limited credit.
  creditCards.map(card => {
    if (card.fairCredit) {
        fairCredit.push(card);
    }
    if (card.badCredit) {
        badCredit.push(card);
    }
    if (card.limitedCredit) {
        limitedCredit.push(card);
    }
    return null;
  });

  // Get only cards that are not Secure Credit Cards
  const nonSecuredCards = creditCards.filter(card => !card.securedCard);

  // Get only cards that are Secure Credit Cards
  const securedCards = creditCards.filter(card => card.securedCard);


    return (
      <CreditCardsContext.Provider value={{ 
        creditCards, 
        fairCredit, 
        badCredit, 
        limitedCredit, 
        nonSecuredCards, 
        securedCards }}
        >
        {children}
      </CreditCardsContext.Provider>
    );
  };

export { CreditCardsContext, CreditCardsProvider };
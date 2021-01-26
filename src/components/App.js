import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Header from '../layout/Header';
import HomePage from '../pages/HomePage';
import Cards from '../components/Cards';

const App = () => {
  return(
    <div>
      <Router>
        {/* <Switch> */}
          <Header />
          <Route path="/" component={ HomePage } exact />
          <Route path="/cards" component={ Cards } />
        {/* </Switch> */}
      </Router>
    </div>
  ) 
}

export default App;
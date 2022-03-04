import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';




function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    })
  }, [] )
  return (
    //BEM
    <Router>
      <div className="App">
      
        <Switch>
          <Route path='/login' >
            <Login/>
          </Route>
          <Route path='/checkout' >
            <Header/>
            <Checkout />
          </Route>
          <Route path='/payment' >
            <Header />
            <h1>I am the payment route</h1>
            <Payment />
          </Route>
          <Route path='/' >
          <Header/>
            <Home/>

          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;

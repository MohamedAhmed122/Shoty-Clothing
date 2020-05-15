import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage.Component/HomePage.component"
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import Header from "./Components/Header/Headr.component"

function App() {
  return (
    <div className="App">
       <Header />
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
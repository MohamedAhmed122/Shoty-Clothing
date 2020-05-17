import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage.Component/HomePage.component"
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import SignPage from "./Pages/SignIn-Page/SignIn-Page"
import Header from "./Components/Header/Headr.component"
import {auth} from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth =null;
  
  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged( user =>{
      this.setState({currentUser : user })
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
         <Header currentUser={this.state.currentUser} />
         <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign' component={SignPage} />
        </Switch>
      </div>
    );
  }
 
}

export default App;

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
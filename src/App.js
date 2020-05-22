import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage.Component/HomePage.component"
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import SignPage from "./Pages/SignIn-Page/SignIn-Page"
import Header from "./Components/Header/Headr.component"

import { auth,createUserProfileDocument } from "./firebase/firebase.utils"

class  App extends React.Component{
  constructor() {
    super();
    this.state={
      currentUser: null,
    }
    
  }
  unsubscribeFromAuth=null;
  // now it is just open subscribation.
  componentDidMount(){
    // here we are fetching the data from the firebase 
    // replac the value of currentUSer(null) to the user in the firebase when user sign in with google
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
   
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser: {
            id :snapShot.id,
            ...snapShot.data()
          }
        })
        console.log(this.state)
      });
    }else{
      this.setState({currentUser :userAuth});
    }
    })
    
  }

  // to prevent leaks memory we have to close subscripation
componentWillUnmount(){
  // close the subscripation
  this.unsubscribeFromAuth();
}
  render(){
    return (
      <div className="App">
         <Header currentUser={this.state.currentUser}/>
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
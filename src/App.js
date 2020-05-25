import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomePage from "./Pages/HomePage.Component/HomePage.component"
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import SignPage from "./Pages/SignIn-Page/SignIn-Page"
import Header from "./Components/Header/Headr.component"
import {
  connect
} from 'react-redux';
import {
  setCurrentUser
} from './redux/User/User-action';

import {
  auth,
  createUserProfileDocument
} from "./firebase/firebase.utils"



class App extends React.Component {

    unsubscribeFromAuth = null;
    componentDidMount() {
     
      const {setCurrentUser} =this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
        } else {

          setCurrentUser( userAuth);
        }
      })
    }

    componentWillUnmount() {

      this.unsubscribeFromAuth();
    }
    render() {
      return (
        <div className="App">
           <Header />
           <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/sign'
               render={()=> this.props.currentUser? 
               <Redirect to='/' /> : <SignPage />} 
              />
          </Switch>
        </div>
      );
   }
}
 
  const mapStateToPtops = state =>({
    currentUser: state.user.currentUser
  })
  //now we are going to connect our app  by caliing the second argument
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })
    export default connect(mapStateToPtops,mapDispatchToProps)(App);

import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser : user})
      // console.log(user);
      createUserProfileDocument(user);
      console.log(user);
      // console.log(userAuth);
      // if(userAuth){
      //   const userRef = await createUserProfileDocument(userAuth);

      //   userRef.onSnapshot(snapShot => {
      //     this.setState({
      //       currentUser : {
      //         id : snapShot.id,
      //         ...snapShot.data()
      //       }
      //     }, () => {
      //       console.log(this.state);
      //     })
      //     // console.log(snapShot.data());
      //   })
      // }
      // else {
      //   this.setState({
      //     currentUser : userAuth
      //   })
      // }
    })

    // console.log(this.state);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

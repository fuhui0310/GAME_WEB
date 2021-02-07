import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componment.jsx';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentDidMount(){
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  //   // const {setCurrentUser} = this.props;

  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);

  //   //     userRef.onSnapshot(snapShot => {
  //   //         setCurrentUser({
  //   //           id: snapShot.id,
  //   //           ...snapShot.data()
  //   //         });
  //   //     });
  //   //   }

  //   // setCurrentUser( userAuth );
  //   // });
  // }

  return (
    <div>
    <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route 
        exact 
        path='/signin' 
        render={() => 
          currentUser ? (
              <Redirect to ='/' /> 
            ) : (
              <SignInAndSignUpPage/>
              )
          } 
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

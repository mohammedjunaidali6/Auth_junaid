import React from 'react';
import './App.css';
import Login from './components/auth/login/login';
import Signup from './components/auth/signup/signup';
import Logout from './components/auth/logout/logout';
import EmailVerifyComponent from './components/auth/signup/verify/email'
import PhoneVerifyComponent from './components/auth/signup/verify/phone'
import {Route, Switch} from 'react-router-dom'
import HomeComponent from './components/home/home';
import Blog from './components/blogs/Blog';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/blogs' component={Blog}/>
        <Route exact path='/' component={HomeComponent} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup} />
        <Route path='/verify/email' component={EmailVerifyComponent} />
        <Route path='/verify/phone' component={PhoneVerifyComponent} />
        <Route path='/logout' component={Logout} />
      </Switch>
    </div>
  );
}

export default App;

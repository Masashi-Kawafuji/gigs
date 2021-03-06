import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import EmailVerification from 'pages/EmailVerification';
import Login from 'pages/Login';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/email-verification' component={EmailVerification} />
    </Switch>
  );
}

export default AppRouter;
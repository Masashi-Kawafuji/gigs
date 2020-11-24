import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from 'pages/SignUp';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path='/sign-up' component={SignUp} />
    </Switch>
  );
}

export default AppRouter;
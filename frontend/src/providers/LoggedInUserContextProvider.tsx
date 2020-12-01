import React, { useState, useEffect, useContext } from 'react';
import LoggedInUserContext from 'contexts/LoggedInUserContext';
import api from 'services/api';

const LoggedInUserContextProvider: React.FC = ({ children }) => {
  const loggedInUserContextValue = useContext(LoggedInUserContext);
  const [loggedInUser, setLoggedInUser] = useState<typeof loggedInUserContextValue.loggedInUser>(null);

  const value = {
    loggedInUser: loggedInUser,
    setLoggedInUser: setLoggedInUser,
    isLoggedIn: loggedInUser !== null
  };

  useEffect(() => {
    const autoLogin = () => {
      api.get('/v1/auto_login')
        .then(response => {
          console.log(response);
          const { user } = response.data;
          setLoggedInUser(user);
        })
        .catch(error => {
          console.log(error);
        });
    }

    autoLogin();
  }, []);

  return (
    <LoggedInUserContext.Provider value={value}>
      {children}
    </LoggedInUserContext.Provider>
  );
}

export default LoggedInUserContextProvider;

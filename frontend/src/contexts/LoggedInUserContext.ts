import React from 'react';

type LoggedInUser = {
  id: number;
  name: string;
  role: string;
  avatar: string | null;
} | null;

type LoggedInUserContextValue = {
  loggedInUser: LoggedInUser;
  setLoggedInUser: React.Dispatch<React.SetStateAction<LoggedInUser>>;
  isLoggedIn: boolean;
};

const initialValue = {
  loggedInUser: null,
  setLoggedInUser: () => { },
  isLoggedIn: false
};

const LoggedInUserContext = React.createContext<LoggedInUserContextValue>(initialValue);

export default LoggedInUserContext;
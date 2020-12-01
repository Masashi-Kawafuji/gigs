import React, { SetStateAction } from 'react';

type LoggedInUser = {
  id: number;
  name: string;
  role: string;
  avatar: string | null;
} | null;

type AuthorizedUserContextValue = {
  loggedInUser: LoggedInUser;
  setLoggedInUser?: React.Dispatch<SetStateAction<LoggedInUser>>;
  isLoggedIn: boolean;
};

const initialValue = {
  loggedInUser: null,
  isLoggedIn: false
};

const LoggedInUserContext = React.createContext<AuthorizedUserContextValue>(initialValue);

export default LoggedInUserContext;
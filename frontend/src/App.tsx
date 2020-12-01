import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoggedInUserContextProvider from 'providers/LoggedInUserContextProvider';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import Layout from 'Layout';
import AppRouter from 'AppRouter';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LoggedInUserContextProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <AppRouter />
          </Layout>
          <CssBaseline />
        </ThemeProvider>
      </LoggedInUserContextProvider>
    </BrowserRouter>
  );
}

export default App;

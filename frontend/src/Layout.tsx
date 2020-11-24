import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    main: {
      marginTop: theme.spacing(8),
      flexGrow: 1
    }
  })
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.main}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import api from 'services/api';
import LoggedInUserContext from 'contexts/LoggedInUserContext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1
    },
    AuthActions: {
      '& > *': {
        marginLeft: theme.spacing(1)
      }
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const { setLoggedInUser, isLoggedIn } = useContext(LoggedInUserContext);

  const handleLogoutClick = () => {
    api.delete('/v1/logout')
      .then(response => {
        console.log(response);
        setLoggedInUser(null);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <AppBar color='inherit' position='fixed'>
        <Toolbar>
          <div className={classes.title}>
            <Link to='/'>
              App Name
            </Link>
          </div>
          <div className={classes.AuthActions}>
            {!isLoggedIn ? (
              <React.Fragment>
                <Button
                  component={Link}
                  to='/login'
                  color='primary'
                  variant='outlined'
                >
                  ログイン
                </Button>
                <Button
                  component={Link}
                  to='/sign-up'
                  color='primary'
                  variant='contained'
                >
                  新規登録
                </Button>
              </React.Fragment>
            ) : (
                <Button
                  onClick={handleLogoutClick}
                  color='primary'
                  variant='contained'
                >
                  ログイアウト
                </Button>
              )}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
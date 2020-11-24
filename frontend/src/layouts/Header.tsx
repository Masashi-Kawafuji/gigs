import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1
    },
    buttons: {
      '& > *': {
        marginLeft: theme.spacing(1),
      }
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      outline: 0,
      width: 600,
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color='inherit' position='fixed'>
        <Toolbar>
          <div className={classes.title}>App Name</div>
          <div className={classes.buttons}>
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
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
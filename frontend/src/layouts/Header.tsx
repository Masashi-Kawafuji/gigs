import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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

type FormModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const LoginFrom: React.FC<FormModalProps> = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
    >
      <Paper className={classes.paper} elevation={3}>
        <Container>
          <Typography variant='subtitle1'>ログイン</Typography>
        </Container>
      </Paper>
    </Modal>
  );
}

const SignUpForm: React.FC<FormModalProps> = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
    >
      <Paper className={classes.paper} elevation={3}>
        <Container>
          <Typography variant='subtitle1'>新規登録</Typography>
        </Container>
      </Paper>
    </Modal>
  );
}

const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);

  const handleLoginModalOpen = () => {
    setIsLoginModalOpen(true);
  }

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  }

  const handleSignUpModalOpen = () => {
    setIsSignUpModalOpen(true);
  }

  const handleSignUpModalClose = () => {
    setIsSignUpModalOpen(false);
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color='inherit' position='fixed'>
        <Toolbar>
          <div className={classes.title}>title</div>
          <div className={classes.buttons}>
            <Button
              color='primary'
              variant='outlined'
              onClick={handleLoginModalOpen}
            >
              ログイン
              </Button>
            <Button
              color='primary'
              variant='contained'
              onClick={handleSignUpModalOpen}
            >
              新規登録
              </Button>
          </div>
        </Toolbar>
      </AppBar>
      <LoginFrom
        isOpen={isLoginModalOpen}
        handleClose={handleLoginModalClose}
      />
      <SignUpForm
        isOpen={isSignUpModalOpen}
        handleClose={handleSignUpModalClose}
      />
    </React.Fragment>
  );
}

export default Header;
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginBottom: theme.spacing(2)
      }
    }
  })
);

const SignUp: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='xs'>
      <form className={classes.root}>
        <FormControl fullWidth required>
          <InputLabel htmlFor='email'>メールアドレス</InputLabel>
          <Input id='email' />
        </FormControl>
        <FormControl fullWidth required>
          <InputLabel htmlFor='password'>パスワード</InputLabel>
          <Input id='password' />
        </FormControl>
        <FormControl fullWidth required>
          <InputLabel htmlFor='password-comfirmation'>パスワード（確認）</InputLabel>
          <Input id='password-comfirmation' />
        </FormControl>
        <FormControl fullWidth required>
          <InputLabel htmlFor='user-name'>ユーザー名</InputLabel>
          <Input id='user-name' />
        </FormControl>
      </form>
    </Container>
  );
}

export default SignUp;
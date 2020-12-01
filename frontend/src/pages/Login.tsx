import React from 'react';
import useForm from 'hooks/useForm';
import api from 'services/api';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

type LoginForm = {
  email: string;
  password: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputs: {
      marginBottom: theme.spacing(3),
      '& > *': {
        marginBottom: theme.spacing(1)
      }
    }
  })
);

const Login: React.FC = () => {
  const [loginForm, handleInputChange] = useForm<LoginForm>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.post('/v1/login', loginForm)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const classes = useStyles();

  return (
    <Container maxWidth='xs'>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputs}>
          <FormControl fullWidth required variant='outlined' margin='dense'>
            <InputLabel htmlFor='email'>メールアドレス</InputLabel>
            <OutlinedInput
              id='email'
              name='email'
              label='メールアドレス'
              value={loginForm.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth required variant='outlined' margin='dense'>
            <InputLabel htmlFor='password'>パスワード</InputLabel>
            <OutlinedInput
              id='password'
              name='password'
              label='パスワード'
              value={loginForm.password}
              onChange={handleInputChange} />
          </FormControl>
        </div>
        <Button type='submit' variant='contained' color='primary' fullWidth>ログイン</Button>
      </form>
    </Container>
  );
}

export default Login;
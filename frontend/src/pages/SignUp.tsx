import React from 'react';
import useForm from 'hooks/useForm';
import api from 'services/api';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

type SignUpForm = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
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

const SignUp: React.FC = () => {
  const [signUpForm, handleInputChange] = useForm<SignUpForm>({
    email: '',
    password: '',
    password_confirmation: '',
    name: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.post('/v1/users', { user: signUpForm })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
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
              value={signUpForm.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth required variant='outlined' margin='dense'>
            <InputLabel htmlFor='password'>パスワード</InputLabel>
            <OutlinedInput
              id='password'
              name='password'
              label='パスワード'
              value={signUpForm.password}
              onChange={handleInputChange} />
          </FormControl>
          <FormControl fullWidth required variant='outlined' margin='dense'>
            <InputLabel htmlFor='password-comfirmation'>パスワード（確認）</InputLabel>
            <OutlinedInput
              id='password-comfirmation'
              name='password_confirmation'
              label='パスワード（確認）'
              value={signUpForm.password_confirmation}
              onChange={handleInputChange} />
          </FormControl>
          <FormControl fullWidth required variant='outlined' margin='dense'>
            <InputLabel htmlFor='user-name'>ユーザー名</InputLabel>
            <OutlinedInput
              id='user-name'
              name='name'
              label='ユーザー名'
              value={signUpForm.name}
              onChange={handleInputChange} />
          </FormControl>
        </div>
        <Button type='submit' variant='contained' color='primary' fullWidth>新規登録</Button>
      </form>
    </Container>
  );
}

export default SignUp;
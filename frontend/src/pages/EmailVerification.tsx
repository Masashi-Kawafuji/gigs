import React, { useState, useEffect } from 'react';
import useQuery from 'hooks/useQuery';
import api from 'services/api';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const EmailVerification: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const query = useQuery();

  useEffect(() => {
    const activateUser = async () => {
      await api.get('/v1/users/activate', {
        params: {
          activate_token: query.get('token'),
          email: query.get('email')
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });

      setIsLoading(false);
    }

    activateUser();
  });

  return (
    <Container maxWidth='xs'>
      <Paper>
        {isLoading ? (
          <CircularProgress />
        ) : (
            <Typography variant='h6'>メールアドレスを確認しました！</Typography>
          )}
      </Paper>
    </Container>
  );
}

export default EmailVerification;
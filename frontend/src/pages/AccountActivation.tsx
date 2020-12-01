import React, { useEffect } from 'react';
import useQuery from 'hooks/useQuery';
import api from 'services/api';

const AccountActivation: React.FC = () => {
  const query = useQuery();

  useEffect(() => {
    const activateUser = () => {
      api.get('/v1/users/activate', {
        params: {
          activate_token: query.get('activate_token'),
          email: query.get('email')
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }

    activateUser();
  });

  return (
    <div>activation</div>
  );
}

export default AccountActivation;
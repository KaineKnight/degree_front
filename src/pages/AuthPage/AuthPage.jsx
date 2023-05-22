import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { AuthForm } from '../../components';
import { AUTH_PAGE, authBoxStyle } from './constants';

function AuthPage() {
  const navigate = useNavigate();

  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <Box sx={authBoxStyle}>
      <div>{AUTH_PAGE}</div>
      <AuthForm />
    </Box>
  );
}

export default memo(AuthPage);

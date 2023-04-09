import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import AuthForm from '../../components/AuthForm';

function AuthPage() {
  const navigate = useNavigate();

  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <Box sx={
      {
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        backgroundColor: '#e7f0ff',
      }
    }
    >
      <div>AuthPage</div>
      <AuthForm />
    </Box>
  );
}

export default memo(AuthPage);

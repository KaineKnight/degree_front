import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import CustomButton from '../FilledButton';

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#17275f',
  height: '416px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 3, 0, 3),
    width: '90%',
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down('md')]: {
    padding: '0',
  },
}));

function GetStarted() {
  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: '35px', color: 'white', fontWeight: '700' }}
          >
            Featured
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#ccc',
              fontWeight: '500',
              my: 3,
            }}
          >
            Everything Featured
          </Typography>
          <CustomButton
            backgroundColor="#fff"
            color="#17275f"
            buttonText="Get started Now"
            getStartedBtn={Boolean(true)}
          />
        </Box>
        <img src="" alt="illustration" style={{ maxWidth: '100%' }} />
      </CustomContainer>
    </CustomBox>
  );
}

export default memo(GetStarted);

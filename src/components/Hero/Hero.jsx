import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../NavbarLanding';
import CustomButton from '../CustomButton';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  color: '#000336',
  fontWeight: 'bold',
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
  },
}));

function Hero() {
  return (
    <Box sx={{ backgroundColor: '#e6f0ff', minHeight: '80vh' }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#687690',
                fontWeight: '500',
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Service Center
            </Typography>
            <Title variant="h1">
              Discover a place where you would love to fix!
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: '18px', color: '#5a6473', my: 4 }}
            >
              Be the first to get the best real estate deals
              before they hit the mass market! Hot foreclosure
              deals with one simple search!
            </Typography>
            <CustomButton
              backgroundColor="#0f1b4c"
              color="#fff"
              buttonText="More About Us"
              heroBtn={Boolean(true)}
            />
          </Box>
          <Box sx={{ flex: '1.25' }}>
            <img alt="heroIMG" style={{ maxWidth: '100%', marginBottom: '2rem' }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default memo(Hero);

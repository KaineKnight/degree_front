import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

import YandexMaps from '../YandexMaps';

const PropertiesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

function Properties() {
  return (
    <Box sx={{ mt: 5, py: 10 }} bgcolor="#f5fafe">
      <Container>
        <PropertiesTextBox>
          <Box width="35%">
            <Typography
              sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}
            >
              Featured Properties
            </Typography>
            <Typography sx={{ color: '#5a6473', fontSize: '16px', mt: 1 }}>
              Eerything you need to know when looking for a service center!
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}><YandexMaps /></Box>
        </PropertiesTextBox>

        <PropertiesBox>
          <Box>Addresses</Box>
        </PropertiesBox>
      </Container>
    </Box>
  );
}

export default memo(Properties);

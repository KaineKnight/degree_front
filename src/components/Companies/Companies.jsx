import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
// 33 minute
const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

function Companies() {
  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img alt="logo" style={{ maxWidth: '100%' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#7d8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            More than 45,000 trust us!
          </Typography>
        </CustomBox>
        <Box>
          <img alt="stars" style={{ maxWidth: '100%' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#7d8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            5 stars!(2kk+ reviews)
          </Typography>
        </Box>
      </CustomContainer>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <img alt="logos" />
      </Container>
    </Box>
  );
}

export default memo(Companies);

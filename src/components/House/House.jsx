import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';

const HouseBox = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  maxWidth: 350,
  backgroundColor: '#fff',
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

const InfoBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ImgContainer = styled(Box)(() => ({
  width: '100%',
}));

function House() {
  return (
    <HouseBox>
      <ImgContainer>
        <img src="" alt="HouseP" style={{ maxWidth: '100%' }} />
      </ImgContainer>

      <Box sx={{ padding: '1rem' }}>
        <Typography variant="body2" sx={{ fontWeight: '700' }}>
          $100
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          address
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <InfoBox>
            <img src="" alt="img" />
            <Typography variant="body2" sx={{ mt: 1 }}>bed</Typography>
          </InfoBox>
          <InfoBox>
            <img src="" alt="img" />
            <Typography variant="body2" sx={{ mt: 1 }}>bed</Typography>
          </InfoBox>
          <InfoBox>
            <img src="" alt="img" />
            <Typography variant="body2" sx={{ mt: 1 }}>bed</Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  );
}

export default memo(House);

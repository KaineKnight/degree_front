import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(10),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const ImgContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const LargeText = styled(Box)(({ theme }) => ({
  fontSize: '64px',
  color: '#000',
  fontWeight: '700',
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
  },
}));

const SmallText = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  color: '#7b8087',
  fontWeight: '500',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
}));

const TextFlexbox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 5, 0, 5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(5),
  },
}));

const Divider = styled('div')(({ theme }) => ({
  width: '13%',
  height: '5px',
  backgroundColor: '#000339',
  [theme.breakpoints.down('md')]: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function Details() {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src="" alt="house" style={{}} />
          </ImgContainer>
          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: '35px',
                color: '#000339',
                fontWeight: '700',
                my: 3,
              }}
            >
              Youve found a neighbour
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#5a6473',
                lineHeight: '27px',
              }}
            >
              When you far away from home... mmm...mmm
              and you dont know where your Sven... Sven...
              mmmm...hmmmm....
            </Typography>
          </Box>
        </CustomBox>
        <TextFlexbox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Services</SmallText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Services</SmallText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Services</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
}

export default memo(Details);

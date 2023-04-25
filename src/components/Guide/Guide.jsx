import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { ArrowRight } from '@mui/icons-material';
import CustomButton from '../CustomButton';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '30%',
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '70%',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    marginBottom: '0',
  },
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

function Guide() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '5%',
          height: '5px',
          backgroundColor: '#000339',
          margin: '0 auto',
        }}
      >
        123
      </div>

      <Typography
        variant="h3"
        sx={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#000339',
          my: 3,
        }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#5a6473',
            textAlign: 'center',
          }}
        >
          Everything you need to know when you want to buy, rent or sell -- All in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src="buyIcon" alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3b3c45',
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689ff' }}
            >
              How to buy
            </Typography>
            <ArrowRight style={{ color: '#0689ff' }} />
          </Box>
        </GuideBox>
        <GuideBox>
          <img src="buyIcon" alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3b3c45',
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689ff' }}
            >
              How to buy
            </Typography>
            <ArrowRight style={{ color: '#0689ff' }} />
          </Box>
        </GuideBox>
        <GuideBox>
          <img src="buyIcon" alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3b3c45',
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689ff' }}
            >
              How to buy
            </Typography>
            <ArrowRight style={{ color: '#0689ff' }} />
          </Box>
        </GuideBox>
      </GuidesBox>
      <CustomButton
        backgroundColor="#0f1b4c"
        color="#fff"
        buttonText="see full guides"
        guideBtn={Boolean(true)}
      />
    </Box>
  );
}

export default memo(Guide);

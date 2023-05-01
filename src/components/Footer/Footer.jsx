import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

const FooterLink = styled('span')(() => ({
  fontSize: '16px',
  color: '#7a7a7e',
  fontWeight: '300',
  cursor: 'pointer',
  '&hover': {
    color: '#000',
  },
}));

function Footer() {
  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography sx={{
              fontSize: '20px',
              color: '#1c1c1d',
              fontWeight: '700',
              mb: 2,
            }}
            >
              Products
            </Typography>
            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '20px',
              color: '#1c1c1d',
              fontWeight: '700',
              mb: 2,
            }}
            >
              Products
            </Typography>
            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '20px',
              color: '#1c1c1d',
              fontWeight: '700',
              mb: 2,
            }}
            >
              Products
            </Typography>
            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <IconBox>
            <img src="" alt="fbIcon" style={{ cursor: 'pointer' }} />
            <img src="" alt="fbIcon" style={{ cursor: 'pointer' }} />
            <img src="" alt="fbIcon" style={{ cursor: 'pointer' }} />
          </IconBox>

        </CustomContainer>
      </CustomContainer>
    </Box>
  );
}

export default memo(Footer);

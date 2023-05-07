import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

import styles from './Footer.module.css';

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

function Footer() {
  return (
    <Box className={styles.boxContainer}>
      <Container className={styles.container}>
        <Box>
          <Typography className={styles.columnTitle}>Products</Typography>
          <Typography className={styles.footerItem}>Listing</Typography>
          <Typography className={styles.footerItem}>Listing</Typography>
          <Typography className={styles.footerItem}>Listing</Typography>
          <Typography className={styles.footerItem}>Listing</Typography>
        </Box>

        <IconBox>
          <img src="" alt="fbIcon" style={{ cursor: 'pointer' }} />
          <img src="" alt="fbIcon" style={{ cursor: 'pointer' }} />
          <img src="" alt="fbIcon" style={{ cursor: 'pointer' }} />
        </IconBox>

      </Container>
    </Box>
  );
}

export default memo(Footer);

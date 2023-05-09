import React, { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

import HorizontalDivider from '../HorizontalDivider';

import {
  ABOUT_SUBTITLE,
  ABOUT_TITLE,
  REVIEWS_AMOUNT,
  REVIEWS_TEXT,
  SERVICES_AMOUNT,
  SERVICES_TEXT,
  STARS_AMOUNT,
  STARS_TEXT,
} from './constants';

import styles from './About.module.css';

function About() {
  return (
    <Box id="about" className={styles.containerBox}>
      <Container>
        <Box className={styles.headerBox}>
          <HorizontalDivider />
          <Typography className={styles.title}>{ABOUT_TITLE}</Typography>
          <Typography className={styles.subtitle}>{ABOUT_SUBTITLE}</Typography>
        </Box>
        <Box className={styles.numbersContainer}>
          <Box className={styles.numberBox}>
            <Box className={styles.largeNumbers}>{SERVICES_AMOUNT}</Box>
            <Box className={styles.caption}>{SERVICES_TEXT}</Box>
          </Box>
          <Box className={styles.numberBox}>
            <Box className={styles.largeNumbers}>{STARS_AMOUNT}</Box>
            <Box className={styles.caption}>{STARS_TEXT}</Box>
          </Box>
          <Box className={styles.numberBox}>
            <Box className={styles.largeNumbers}>{REVIEWS_AMOUNT}</Box>
            <Box className={styles.caption}>{REVIEWS_TEXT}</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(About);

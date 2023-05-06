import React, { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

import styles from './Banner.module.css';
import bannerImage from '../../assets/images/bannerImage.jpg';
import { DESCRIPTION_TEXT, HEADER_TEXT, SUBHEADER_TEXT } from './constants';

function Banner() {
  return (
    <Box className={styles.boxWrapper}>
      <Container>
        <Box className={styles.boxContent}>
          <Box className={styles.leftColumnBox}>
            <Typography className={styles.subtitle} variant="body2">
              {HEADER_TEXT}
            </Typography>
            <Typography className={styles.title} variant="h1">
              {SUBHEADER_TEXT}
            </Typography>
            <Typography className={styles.description} variant="body2">
              {DESCRIPTION_TEXT}
            </Typography>
          </Box>
          <Box className={styles.imageBox}>
            <img src={bannerImage} alt="heroIMG" className={styles.image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(Banner);

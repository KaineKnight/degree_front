import React, { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

import CustomButton from '../CustomButton';

import styles from './Banner.module.css';
import bannerImage from '../../assets/images/bannerImage.jpg';

function Banner() {
  return (
    <Box className={styles.boxWrapper}>
      <Container>
        <Box className={styles.boxContent}>
          <Box className={styles.leftColumnBox}>
            <Typography className={styles.subtitle} variant="body2">
              Добро пожаловать в наш сервисный центр
            </Typography>
            <Typography className={styles.title} variant="h1">
              Ремонт оборудования наилучшим образом!
            </Typography>
            <Typography className={styles.description} variant="body2">
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
          <Box className={styles.imageBox}>
            <img src={bannerImage} alt="heroIMG" className={styles.image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(Banner);

import React, { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

import HorizontalDivider from '../HorizontalDivider';

import {
  PHOTOS_SUBTITLE,
  PHOTOS_TITLE,
  PROFESSIONALISM_TEXT,
  QUALIFIED_TEXT,
  SERVICE_TEXT,
} from './constants';

import styles from './ServicePhotos.module.css';
import buildingImage from '../../assets/images/serviceBuildingOutside.jpg';
import serviceImage1 from '../../assets/images/serviceCenter1.jpg';
import serviceImage2 from '../../assets/images/serviceCenter2.jpg';
import serviceImage3 from '../../assets/images/serviceCenter3.jpg';

function ServicePhotos() {
  return (
    <Box id="servicePhotos" className={styles.containerBox}>
      <Container>
        <Box className={styles.captions}>
          <img src={buildingImage} alt={buildingImage} className={styles.bigImage} />
          <Box>
            <HorizontalDivider />
            <Typography className={styles.title}>{PHOTOS_TITLE}</Typography>
            <Typography className={styles.subtitle}>{PHOTOS_SUBTITLE}</Typography>
          </Box>
        </Box>

        <Box className={styles.images}>
          <Box className={styles.imageBox}>
            <img className={styles.bigImage} alt={serviceImage1} src={serviceImage1} />
            <Box className={styles.imageText}>{SERVICE_TEXT}</Box>
          </Box>
          <Box className={styles.imageBox}>
            <img className={styles.bigImage} alt={serviceImage2} src={serviceImage2} />
            <Box className={styles.imageText}>{QUALIFIED_TEXT}</Box>
          </Box>
          <Box className={styles.imageBox}>
            <img className={styles.bigImage} alt={serviceImage3} src={serviceImage3} />
            <Box className={styles.imageText}>{PROFESSIONALISM_TEXT}</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(ServicePhotos);

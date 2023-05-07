import React, { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

import YandexMaps from '../YandexMaps';

import { WHERE_TO_FIND, WHERE_TO_FIND_TEXT } from './constants';

import styles from './WhereToFind.module.css';

function WhereToFind() {
  return (
    <Box className={styles.contentSetup}>
      <Container>
        <Box className={styles.content}>
          <Box className={styles.textContainer}>
            <Typography className={styles.title}>
              {WHERE_TO_FIND}
            </Typography>
            <Typography className={styles.subtitle}>
              {WHERE_TO_FIND_TEXT}
            </Typography>
          </Box>
          <Box className={styles.maps}><YandexMaps /></Box>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(WhereToFind);

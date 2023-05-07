import React, { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

import CustomButton from '../FilledButton';
import { SEND_REQUEST_TEXT } from '../../utils/constants';

import { PLACARD_SUBTITLE, PLACARD_TITLE } from './constants';

import styles from './Placard.module.css';

function Placard() {
  return (
    <Box className={styles.container}>
      <Container className={styles.content}>
        <Box>
          <Typography className={styles.title}>
            {PLACARD_TITLE}
          </Typography>
          <Typography className={styles.subtitle}>
            {PLACARD_SUBTITLE}
          </Typography>
          <CustomButton backgroundColor="#fff" color="#17275f">
            {SEND_REQUEST_TEXT}
          </CustomButton>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(Placard);

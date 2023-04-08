import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { LandingHeader } from '../../components';

import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <LandingHeader />
      <div>body</div>
    </div>
  );
}

export default memo(LandingPage);

import React, { memo } from 'react';

import { Button } from '@mui/material';

import styles from './LandingHeader.module.css';
import logo from '../../assets/images/logo.png';

function LandingHeader() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo.png" />
      <div>
        <Button>button</Button>
      </div>
    </div>
  );
}

export default memo(LandingHeader);

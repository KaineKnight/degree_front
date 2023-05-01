import React, { memo } from 'react';

import { Box } from '@mui/material';

import styles from './Sidebar.module.css';
import MobileMenu from '../MobileMenu';

function Sidebar() {
  return (
    <Box className={styles.sidebarBox}>
      <Box className={styles.menuWrapper}>
        <MobileMenu />
      </Box>
    </Box>
  );
}

export default memo(Sidebar);

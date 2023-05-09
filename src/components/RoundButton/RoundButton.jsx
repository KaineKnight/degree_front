import React, { memo } from 'react';

import {
  Add as AddIcon,
} from '@mui/icons-material';
import {
  Fab,
  Tooltip,
} from '@mui/material';

import styles from './RoundButton.module.css';

function RequestButton() {
  return (
    <Tooltip
      title="Add"
      className={styles.button}
    >
      <Fab color="primary">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}

export default memo(RequestButton);

import React, { memo } from 'react';

import styles from './HorizontalDivider.module.css';

function HorizontalDivider() {
  return (
    <div className={styles.divider} />
  );
}

export default memo(HorizontalDivider);

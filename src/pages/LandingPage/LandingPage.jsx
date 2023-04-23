import React, { memo } from 'react';

import styles from './LandingPage.module.css';
import { Companies, Guide, Hero } from '../../components';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Hero />
      <Companies />
      <Guide />
      <div>body</div>
    </div>
  );
}

export default memo(LandingPage);

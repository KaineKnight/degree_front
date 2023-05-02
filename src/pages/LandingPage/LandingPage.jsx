import React, { memo } from 'react';

import {
  Companies,
  Details,
  Footer,
  GetStarted,
  Guide,
  Banner,
  Navbar,
  Properties,
  AddButton,
} from '../../components';

import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <Banner />
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
      <AddButton />
    </div>
  );
}

export default memo(LandingPage);

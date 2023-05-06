import React, { memo } from 'react';

import {
  Companies,
  Details,
  Footer,
  GetStarted,
  Manual,
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
      <Properties />
      <Banner />
      <Manual />

      <Details />
      <GetStarted />
      <Companies />
      <Footer />
      <AddButton />
    </div>
  );
}

export default memo(LandingPage);

/*
background color #f5fafe
export const a = ' (или за вас это сделает мастер сервисного центра)';
export const b = ' и отдайте свое устройство мастеру';
export const c =
  ' вашего оборудования. Статус заявки можно отследить по трек-номеру, 
  который выдается при оформлении заявки';
export const d = ' после обслуживания';
*/

import React, { memo } from 'react';

import {
  ServicePhotos,
  About,
  Footer,
  Placard,
  Manual,
  Banner,
  Navbar,
  WhereToFind,
  Questions,
} from '../../components';

import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <Banner />
      <Manual />
      <WhereToFind />
      <About />
      <ServicePhotos />
      <Questions />
      <Placard />

      <Footer />
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

import React, { memo } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { mapState, placeMark } from './constants';

import styles from './YandexMaps.module.css';

function YandexMaps() {
  return (
    <YMaps>
      <Map state={mapState} className={styles.map}>
        <Placemark geometry={placeMark} />
      </Map>
    </YMaps>
  );
}

export default memo(YandexMaps);

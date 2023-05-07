import React, { memo } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { mapState } from './constants';

import styles from './YandexMaps.module.css';

const placemarks = [
  { y: 55.76, x: 37.64 },
  { y: 55.79, x: 37.47 },
  { y: 55.68, x: 37.66 },
  { y: 55.85, x: 37.65 },
];

function YandexMaps() {
  const placemarksJSX = placemarks.map((placemark) => (
    <Placemark
      key={`${placemark.x}-${placemark.y}`}
      geometry={[placemark.y, placemark.x]}
    />
  ));
  return (
    <YMaps>
      <Map state={mapState} className={styles.map}>
        {placemarksJSX}
      </Map>
    </YMaps>
  );
}

export default memo(YandexMaps);

import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { placemarksRequest } from '../../redux/actions';
import { mapState } from './constants';

import styles from './YandexMaps.module.css';

function YandexMaps() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placemarksRequest());
  }, []);

  const placemarks = useSelector((store) => store.placemarks.placemarks);

  const placemarksJSX = placemarks.map((placemark) => (
    <Placemark
      key={placemark.id}
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

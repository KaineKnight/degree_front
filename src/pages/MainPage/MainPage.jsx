import React, { memo } from 'react';

import {
  Feed,
  Rightbar,
} from '../../components';

function MainPage() {
  return (
    <>
      <Feed />
      <Rightbar />
    </>
  );
}

export default memo(MainPage);

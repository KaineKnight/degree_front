import React, { memo } from 'react';
import { Outlet } from 'react-router';

import Navbar from '../NavbarLanding';

function LandingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default memo(LandingLayout);

import React, { memo } from 'react';
import { Outlet } from 'react-router';

import Navbar from '../NavbarLanding';
import ModalBox from '../ModalBox';
import RequestForm from '../RequestForm';

function LandingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ModalBox>
        <RequestForm />
      </ModalBox>
    </>
  );
}

export default memo(LandingLayout);

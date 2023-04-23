import React, { memo } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default memo(Layout);

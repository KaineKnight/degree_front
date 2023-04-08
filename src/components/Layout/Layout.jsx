import React, { memo } from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default memo(Layout);

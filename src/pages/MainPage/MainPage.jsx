import React, { memo } from 'react';

import { Box, Stack } from '@mui/material';

import {
  Feed,
  Navbar,
  Rightbar,
  Sidebar,
} from '../../components';

function MainPage() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default memo(MainPage);

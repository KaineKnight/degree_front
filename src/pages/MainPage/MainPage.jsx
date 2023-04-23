import React, { memo } from 'react';

import { Box, Stack } from '@mui/material';

import {
  AddButton,
  Feed,
  Rightbar,
  Sidebar,
} from '../../components';

function MainPage() {
  return (
    <Box bgcolor="background.default" color="text.primary">
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddButton />
    </Box>
  );
}

export default memo(MainPage);

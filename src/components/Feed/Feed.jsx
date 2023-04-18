import { Box } from '@mui/material';
import React, { memo } from 'react';

function Feed() {
  return (
    <Box bgcolor="pink" flex={4} p={2}>Feed</Box>
  );
}

export default memo(Feed);

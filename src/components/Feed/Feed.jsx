import React, { memo } from 'react';

import {
  Box,
} from '@mui/material';
import Task from '../Task';

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Box>
  );
}

export default memo(Feed);

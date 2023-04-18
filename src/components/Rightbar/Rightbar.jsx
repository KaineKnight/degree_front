import { Box } from '@mui/material';
import React, { memo } from 'react';

function Rightbar() {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Rightbar
    </Box>
  );
}

export default memo(Rightbar);

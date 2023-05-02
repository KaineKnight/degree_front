import {
  Box,
  Divider,
  List,
  Typography,
} from '@mui/material';
import React, { memo } from 'react';

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed" width={300} mt={2}>
        <Typography variant="h6" fontWeight={100}>Filters</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Typography>Filter</Typography>
          <Divider variant="inset" component="li" />
          <Typography>Filter</Typography>
        </List>
      </Box>
    </Box>
  );
}

export default memo(Rightbar);

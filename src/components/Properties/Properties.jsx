import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

const PropertiesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function Properties() {
  return (
    <div>Properties</div>
  );
}

export default memo(Properties);

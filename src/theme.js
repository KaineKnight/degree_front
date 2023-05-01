/* eslint-disable import/prefer-default-export */

import { createTheme } from '@mui/material';

const themeMode = 'light';

export const theme = createTheme({
  palette: {
    mode: themeMode,
    primary: {
      main: '#87A3F7',
    },
    background: {
      default: themeMode === 'light' ? '#E7F0FF' : '#121212',
    },
  },
});

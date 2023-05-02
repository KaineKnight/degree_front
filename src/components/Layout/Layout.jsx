import React, { memo, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Stack,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { getLocalStorageItem } from '../../utils/localStorageInteractor';
import { toggleTheme } from '../../redux/actions';
import { IS_DARK_MODE } from '../../redux/constants';

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkModeString = getLocalStorageItem(IS_DARK_MODE);
    const isDarkMode = isDarkModeString && JSON.parse(isDarkModeString.toLowerCase());
    if (isDarkMode) dispatch(toggleTheme());
  }, []);
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      primary: { main: '#87A3F7' },
      background: { default: isDarkTheme ? '#121212' : '#E7F0FF' },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box bgcolor="background.default" color="text.primary">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Outlet />
        </Stack>
        {/* <AddButton /> */}
      </Box>
    </ThemeProvider>
  );
}

export default memo(Layout);

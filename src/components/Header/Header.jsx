import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Build as BuildIcon } from '@mui/icons-material';

import { toggleMobileMenu } from '../../redux/actions';
import MobileMenu from '../MobileMenu';

import {
  LOGOUT_MENU,
  PROFILE_MENU,
  SETTINGS_MENU,
  TASKS_MENU,
  menuPosition,
} from './constants';

import styles from './Header.module.css';
import logo from '../../assets/images/logoStaff.png';

function Header() {
  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector((store) => store.mobileMenu.isOpen);
  const user = useSelector((store) => store.auth.user);

  const [open, setOpen] = useState(false);
  const handleAvatarClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={styles.toolbar}>
        <Box className={styles.logo}>
          <img className={styles.logoImage} src={logo} alt="logo" />
        </Box>
        <BuildIcon className={styles.mobileLogo} onClick={handleMenuClick} />
        <Drawer
          anchor="left"
          open={isMobileMenuOpen}
          onClose={handleMenuClick}
        >
          <MobileMenu />
        </Drawer>
        <Box className={styles.search}>
          <InputBase className={styles.searchPlaceholder} placeholder="search..." />
        </Box>
        <Box className={styles.userBox} onClick={handleAvatarClick}>
          <Typography className={styles.name} variant="span">{`${user?.firstName} ${user?.lastName}`}</Typography>
          <Avatar className={styles.avatar} />
        </Box>
      </Toolbar>
      <Menu
        open={open}
        onClose={handleAvatarClick}
        anchorOrigin={menuPosition}
        transformOrigin={menuPosition}
      >
        <MenuItem>{PROFILE_MENU}</MenuItem>
        <MenuItem>{TASKS_MENU}</MenuItem>
        <MenuItem>{SETTINGS_MENU}</MenuItem>
        <MenuItem>{LOGOUT_MENU}</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default memo(Header);

import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Build as BuildIcon } from '@mui/icons-material';

import { logoutRequest, toggleMobileMenu } from '../../redux/actions';
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
  const navigate = useNavigate();

  const isMobileMenuOpen = useSelector((store) => store.mobileMenu.isOpen);
  const user = useSelector((store) => store.auth.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
    setOpen(!open);
  };

  const handleMenuClick = () => dispatch(toggleMobileMenu());
  const handleLogout = () => dispatch(logoutRequest());
  const switchRoute = (path) => {
    navigate(path);
    handleClick();
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
        <Box className={styles.userBox} onClick={handleClick}>
          <Typography className={styles.name} variant="span">{`${user?.firstName} ${user?.lastName}`}</Typography>
          <Avatar className={styles.avatar} />
        </Box>
      </Toolbar>
      <Menu
        open={open}
        onClose={handleClick}
        anchorOrigin={menuPosition}
        transformOrigin={menuPosition}
        anchorEl={anchorEl}
      >
        <MenuItem onClick={() => switchRoute('profile')}>{PROFILE_MENU}</MenuItem>
        <MenuItem onClick={() => switchRoute('my-tasks')}>{TASKS_MENU}</MenuItem>
        <MenuItem onClick={() => switchRoute('settings')}>{SETTINGS_MENU}</MenuItem>
        <MenuItem onClick={handleLogout}>{LOGOUT_MENU}</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default memo(Header);

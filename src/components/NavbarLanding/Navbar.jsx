import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Home as HomeIcon, Menu as MenuIcon } from '@mui/icons-material';

import CustomButton from '../CustomButton';
import { toggleMobileMenu } from '../../redux/actions';

import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector((store) => store.mobileMenu.isOpen);

  const handleMenuClick = () => {
    dispatch(toggleMobileMenu());
  };

  const list = (
    <List>
      {['Home', 'Features', 'Services', 'Listed', 'Contact'].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <HomeIcon />}
                {index === 2 && <HomeIcon />}
                {index === 3 && <HomeIcon />}
                {index === 4 && <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ),
      )}
    </List>
  );

  return (
    <Container className={styles.container}>
      <Box className={styles.leftMenuBox}>
        <Box className={styles.menuIconBox}>
          <MenuIcon className={styles.menuIcon} onClick={handleMenuClick} />
          <Drawer
            anchor="left"
            open={isMobileMenuOpen}
            onClose={handleMenuClick}
          >
            <Box
              sx={{ width: { xs: 200, sm: 250 } }}
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {list}
            </Box>
          </Drawer>
          <img className={styles.logo} src={logo} alt="logo" />
        </Box>

        <Box className={styles.linksContainer}>
          <Typography className={styles.navLink} variant="body2">Home</Typography>
          <Typography className={styles.navLink} variant="body2">Features</Typography>
          <Typography className={styles.navLink} variant="body2">Services</Typography>
          <Typography className={styles.navLink} variant="body2">Listed</Typography>
          <Typography className={styles.navLink} variant="body2">Contact</Typography>
        </Box>
      </Box>

      <Box className={styles.rightMenuBox}>
        <Typography className={styles.navLink} variant="body2">Sign Up</Typography>
        <CustomButton
          backgroundColor="#0f1b4c"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </Container>
  );
}

export default memo(Navbar);

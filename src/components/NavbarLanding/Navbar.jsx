import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

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
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  AppShortcut as AppIcon,
  PsychologyAlt as QuestionsIcon,
  Info as InfoIcon,
  Contacts as ContactsIcon,
  Map as MapIcon,
} from '@mui/icons-material';

import FilledButton from '../FilledButton';
import RoundButton from '../RoundButton';
import { toggleMobileMenu, toggleModal } from '../../redux/actions';
import { SEND_REQUEST_TEXT } from '../../utils/constants';

import {
  ABOUT_BUTTON,
  HOME_BUTTON,
  HOW_BUTTON,
  PHOTOS_BUTTON,
  QUESTIONS_BUTTON,
  TRACK_REQUEST,
  WHERE_BUTTON,
  navbarMenu,
} from './constants';

import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector((store) => store.mobileMenu.isOpen);

  const handleMenuClick = () => {
    dispatch(toggleMobileMenu());
  };

  const openModal = () => dispatch(toggleModal());

  const mobileList = (
    <List>
      {navbarMenu.map(
        (item) => (
          <ListItem key={item.text} disablePadding>
            <HashLink to={`/landing/${item.hash}`} smooth className={styles.navLink}>
              <ListItemButton>
                <ListItemIcon>
                  {item.text === HOME_BUTTON && <HomeIcon />}
                  {item.text === HOW_BUTTON && <AppIcon />}
                  {item.text === WHERE_BUTTON && <MapIcon />}
                  {item.text === ABOUT_BUTTON && <InfoIcon />}
                  {item.text === PHOTOS_BUTTON && <ContactsIcon />}
                  {item.text === QUESTIONS_BUTTON && <QuestionsIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </HashLink>
          </ListItem>
        ),
      )}
    </List>
  );

  const desktopMenu = (
    <Box className={styles.linksContainer}>
      {navbarMenu.map((item) => (
        <HashLink key={item.text} to={`/landing/${item.hash}`} smooth className={styles.navLink}>
          <Typography variant="body2">{item.text}</Typography>
        </HashLink>
      ))}
    </Box>
  );

  return (
    <Container id="navbar" className={styles.container}>
      <Box className={styles.leftMenuBox}>

        <Box className={styles.menuIconBox}>
          <MenuIcon className={styles.menuIcon} onClick={handleMenuClick} />
          <Drawer anchor="left" open={isMobileMenuOpen} onClose={handleMenuClick}>
            <Box
              className={styles.boxMobileMenu}
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {mobileList}
            </Box>
          </Drawer>
          <HashLink to="/landing"><img className={styles.logo} src={logo} alt="logo" /></HashLink>
        </Box>

        <Box className={styles.linksBox}>
          {desktopMenu}
          <HashLink to="/landing/track" className={styles.navigationButton}>
            <FilledButton>{TRACK_REQUEST}</FilledButton>
          </HashLink>
        </Box>
      </Box>

      <Box onClick={openModal} className={styles.rightMenuBox}>
        <Box className={styles.desktopRequest}>
          <FilledButton>{SEND_REQUEST_TEXT}</FilledButton>
        </Box>
        <Box className={styles.mobileRequest}><RoundButton /></Box>
      </Box>
    </Container>
  );
}

export default memo(Navbar);

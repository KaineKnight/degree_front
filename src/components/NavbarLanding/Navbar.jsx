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
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  AppShortcut as AppIcon,
  PsychologyAlt as QuestionsIcon,
  Info as InfoIcon,
  Contacts as ContactsIcon,
} from '@mui/icons-material';

import FilledButton from '../FilledButton';
import { toggleMobileMenu } from '../../redux/actions';
import { SEND_REQUEST_TEXT } from '../../utils/constants';

import {
  ABOUT_BUTTON,
  CONTACT_BUTTON,
  HOME_BUTTON,
  HOW_BUTTON,
  QUESTIONS_BUTTON,
  TRACK_REQUEST,
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

  const mobileList = (
    <List>
      {navbarMenu.map(
        (text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === HOME_BUTTON && <HomeIcon />}
                {text === HOW_BUTTON && <AppIcon />}
                {text === ABOUT_BUTTON && <InfoIcon />}
                {text === QUESTIONS_BUTTON && <QuestionsIcon />}
                {text === CONTACT_BUTTON && <ContactsIcon />}
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
              className={styles.boxMobileMenu}
              onClick={handleMenuClick}
              onKeyDown={handleMenuClick}
            >
              {mobileList}
            </Box>
          </Drawer>
          <img className={styles.logo} src={logo} alt="logo" />
        </Box>

        <Box className={styles.linksBox}>
          <Box className={styles.linksContainer}>
            <Typography className={styles.navLink} variant="body2">{HOME_BUTTON}</Typography>
            <Typography className={styles.navLink} variant="body2">{HOW_BUTTON}</Typography>
            <Typography className={styles.navLink} variant="body2">{ABOUT_BUTTON}</Typography>
            <Typography className={styles.navLink} variant="body2">{QUESTIONS_BUTTON}</Typography>
            <Typography className={styles.navLink} variant="body2">{CONTACT_BUTTON}</Typography>
          </Box>
          <FilledButton>
            {TRACK_REQUEST}
          </FilledButton>
        </Box>
      </Box>

      <Box className={styles.rightMenuBox}>
        <FilledButton className={styles.trackNumber}>
          {SEND_REQUEST_TEXT}
        </FilledButton>
      </Box>
    </Container>
  );
}

export default memo(Navbar);

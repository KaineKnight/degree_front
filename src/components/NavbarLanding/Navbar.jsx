import React, { memo, useState } from 'react';

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
import styled from '@emotion/styled';

import logo from '../../assets/images/logo.png';
import CustomButton from '../CustomButton';

const NavLink = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const NavbarLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: 'pointer',
  display: 'none',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const NavbarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const NavbarLogo = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  width: '100px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (!(
      event.type === 'keydown'
      && (event.type === 'Tab' || event.type === 'Shift')
    )) {
      setMobileMenu({ ...mobileMenu, [anchor]: open });
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
    </Box>
  );

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomMenuIcon onClick={toggleDrawer('left', true)} />
          <Drawer
            anchor="left"
            open={mobileMenu?.left}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          <NavbarLogo src={logo} alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <NavLink variant="body2">Sign Up</NavLink>
        <CustomButton
          backgroundColor="#0f1b4c"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </NavbarContainer>
  );
}

export default memo(Navbar);

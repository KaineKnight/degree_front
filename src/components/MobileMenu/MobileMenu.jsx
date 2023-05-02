import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Article as ArticleIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  ModeNight as ModeNightIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Storefront as StoreIcon,
} from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

import {
  EMPLOYEES_PAGE,
  HOME_PAGE,
  ORDER_PAGE,
  PROFILE_PAGE,
  SETTINGS_PAGE,
  TASKS_PAGE,
  sidebarMenu,
} from './constants';
import { toggleTheme } from '../../redux/actions';

function MobileMenu() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const switchTheme = () => dispatch(toggleTheme());

  return (
    <List>
      {sidebarMenu.map(
        (text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === HOME_PAGE && <HomeIcon />}
                {text === TASKS_PAGE && <ArticleIcon />}
                {text === ORDER_PAGE && <StoreIcon />}
                {text === EMPLOYEES_PAGE && <GroupIcon />}
                {text === SETTINGS_PAGE && <SettingsIcon />}
                {text === PROFILE_PAGE && <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ),
      )}
      <ListItem>
        <ListItemIcon>
          <ModeNightIcon />
        </ListItemIcon>
        <Switch checked={isDarkTheme} onChange={switchTheme} />
      </ListItem>
    </List>
  );
}

export default memo(MobileMenu);

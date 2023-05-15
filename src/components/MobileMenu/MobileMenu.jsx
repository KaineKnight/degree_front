import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const switchTheme = () => dispatch(toggleTheme());
  const switchRoute = (page) => navigate(page);

  return (
    <List>
      {sidebarMenu.map(
        (item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => switchRoute(item.page)}>
              <ListItemIcon>
                {item.text === HOME_PAGE && <HomeIcon />}
                {item.text === TASKS_PAGE && <ArticleIcon />}
                {item.text === ORDER_PAGE && <StoreIcon />}
                {item.text === EMPLOYEES_PAGE && <GroupIcon />}
                {item.text === SETTINGS_PAGE && <SettingsIcon />}
                {item.text === PROFILE_PAGE && <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
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

import React, { memo } from 'react';
import { useNavigate } from 'react-router';

import { Box, Container, Typography } from '@mui/material';
import {
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

import {
  ABOUT_DEVELOPER,
  DEVELOPER_INFO,
  EMPLOYEES_PAGE,
  EMPLOYEES_TEXT,
  EMPLOYEE_DOCUMENT,
  EMPLOYEE_WORK,
  FIX_CONSOLE,
  FIX_PC,
  FIX_PHONE,
  FIX_TABLET,
  SERVICES_TEXT,
} from './constants';

import styles from './Footer.module.css';

function Footer() {
  const navigate = useNavigate();

  const redirectToStaff = () => navigate('/auth');
  return (
    <Box className={styles.boxContainer}>
      <Container className={styles.container}>
        <Box>
          <Typography className={styles.columnTitle}>{SERVICES_TEXT}</Typography>
          <Typography className={styles.footerItem}>{FIX_PHONE}</Typography>
          <Typography className={styles.footerItem}>{FIX_TABLET}</Typography>
          <Typography className={styles.footerItem}>{FIX_CONSOLE}</Typography>
          <Typography className={styles.footerItem}>{FIX_PC}</Typography>
        </Box>
        <Box>
          <Typography className={styles.columnTitle}>{EMPLOYEES_TEXT}</Typography>
          <Typography
            onClick={redirectToStaff}
            className={styles.footerItem}
          >
            {EMPLOYEES_PAGE}
          </Typography>
          <Typography className={styles.footerItem}>{EMPLOYEE_DOCUMENT}</Typography>
          <Typography className={styles.footerItem}>{EMPLOYEE_WORK}</Typography>
        </Box>
        <Box>
          <Typography className={styles.columnTitle}>{ABOUT_DEVELOPER}</Typography>
          <Typography className={styles.footerItem}>{DEVELOPER_INFO}</Typography>
        </Box>
        <Box className={styles.contacts}>
          <TelegramIcon className={styles.contact} />
          <WhatsAppIcon className={styles.contact} />
          <MailIcon className={styles.contact} />
        </Box>

      </Container>
    </Box>
  );
}

export default memo(Footer);

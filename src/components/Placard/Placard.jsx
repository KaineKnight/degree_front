import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Container, Typography } from '@mui/material';

import FilledButton from '../FilledButton';
import { SEND_REQUEST_TEXT } from '../../utils/constants';
import { toggleModal } from '../../redux/actions';

import { PLACARD_SUBTITLE, PLACARD_TITLE } from './constants';

import styles from './Placard.module.css';

function Placard() {
  const dispatch = useDispatch();

  const openModal = () => dispatch(toggleModal());

  return (
    <Box id="placard" className={styles.container}>
      <Container className={styles.content}>
        <Box>
          <Typography className={styles.title}>
            {PLACARD_TITLE}
          </Typography>
          <Typography className={styles.subtitle}>
            {PLACARD_SUBTITLE}
          </Typography>
          <Box onClick={openModal}>
            <FilledButton backgroundColor="#fff" color="#17275f">{SEND_REQUEST_TEXT}</FilledButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(Placard);

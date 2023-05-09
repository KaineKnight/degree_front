import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Typography } from '@mui/material';
import {
  Description as PageIcon,
  DirectionsRun as WalkIcon,
  AccessTime as TimerIcon,
  Devices as DevicesIcon,
} from '@mui/icons-material';

import FilledButton from '../FilledButton';
import HorizontalDivider from '../HorizontalDivider';
import { SEND_REQUEST_TEXT } from '../../utils/constants';
import { toggleModal } from '../../redux/actions';

import {
  STEP_FOUR,
  STEP_ONE,
  STEP_THREE,
  STEP_TWO,
  SUBTITLE_TEXT,
  WHAT_TO_DO,
  steps,
} from './constants';

import styles from './Manual.module.css';

function Manual() {
  const dispatch = useDispatch();

  const openModal = () => dispatch(toggleModal());

  const stepsJSX = steps.map((step) => (
    <Box key={step.step} className={styles.step}>
      {step.step === STEP_ONE && <PageIcon />}
      {step.step === STEP_TWO && <WalkIcon />}
      {step.step === STEP_THREE && <TimerIcon />}
      {step.step === STEP_FOUR && <DevicesIcon />}
      <Typography className={styles.stepTitle} variant="body2">
        {step.step}
      </Typography>
      <Typography className={styles.stepDescription} variant="body2">
        {step.description}
      </Typography>
    </Box>
  ));
  return (
    <Box id="manual" className={styles.container}>
      <HorizontalDivider />
      <Typography variant="h3" className={styles.title}>
        {WHAT_TO_DO}
      </Typography>
      <Box className={styles.titleContainer}>
        <Typography variant="body2" className={styles.subtitle}>
          {SUBTITLE_TEXT}
        </Typography>
      </Box>
      <Box className={styles.stepsBox}>
        {stepsJSX}
      </Box>
      <Box onClick={openModal}><FilledButton>{SEND_REQUEST_TEXT}</FilledButton></Box>
    </Box>
  );
}

export default memo(Manual);

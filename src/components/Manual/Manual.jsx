import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';
import {
  Description as PageIcon,
  DirectionsRun as WalkIcon,
  AccessTime as TimerIcon,
  Devices as DevicesIcon,
} from '@mui/icons-material';

import CustomButton from '../FilledButton';

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
import { SEND_REQUEST_TEXT } from '../../utils/constants';

function Manual() {
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
    <Box className={styles.container}>
      <Box className={styles.horizontalDivider} />
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
      <CustomButton>{SEND_REQUEST_TEXT}</CustomButton>
    </Box>
  );
}

export default memo(Manual);

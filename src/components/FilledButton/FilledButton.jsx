import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

import { Button } from '@mui/material';

import { DEFAULT_BUTTON_BACKGROUND_COLOR, DEFAULT_BUTTON_TEXT, DEFAULT_BUTTON_TEXT_COLOR } from './constants';

import styles from './FilledButton.module.css';

function FilledButton({
  backgroundColor,
  color,
  children,
}) {
  const sxButton = {
    backgroundColor,
    color,
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
  };
  return (
    <Button
      className={styles.filledButton}
      sx={sxButton}
    >
      {children}
    </Button>
  );
}

FilledButton.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

FilledButton.defaultProps = ({
  backgroundColor: DEFAULT_BUTTON_BACKGROUND_COLOR,
  color: DEFAULT_BUTTON_TEXT_COLOR,
  children: DEFAULT_BUTTON_TEXT,
});

export default memo(FilledButton);

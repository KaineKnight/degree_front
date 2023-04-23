import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';

function CustomButton({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) {
  const CustomBtn = styled(Button)(({ theme }) => ({
    backgroundColor,
    color,
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    display: 'block',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down('md')]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 3, 'auto'),
      width: (heroBtn || getStartedBtn) && '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && '90%',
    },
  }));

  return <CustomBtn>{buttonText}</CustomBtn>;
}

CustomButton.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  buttonText: PropTypes.string,
  heroBtn: PropTypes.bool,
  guideBtn: PropTypes.bool,
  getStartedBtn: PropTypes.bool,
};

CustomButton.defaultProps = ({
  backgroundColor: '#000',
  color: '#fff',
  buttonText: '',
  heroBtn: false,
  guideBtn: false,
  getStartedBtn: false,
});

export default memo(CustomButton);

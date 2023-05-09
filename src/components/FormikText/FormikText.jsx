/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

function FormikText(props) {
  const [field, meta] = useField(props);

  const displayError = meta?.touched && meta?.error;
  return (
    <TextField
      margin="normal"
      variant="outlined"
      error={displayError}
      // helperText={displayError}
      {...field}
      {...props}
    />
  );
}

FormikText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

FormikText.defaultProps = {
  type: 'text',
  required: false,
  multiline: false,
};

export default memo(FormikText);

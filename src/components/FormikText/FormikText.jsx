/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

function FormikText(props) {
  const [field, meta] = useField(props);
  const {
    label, name, type, variant, ...rest
  } = props;

  const displayError = meta.touched && meta?.error;

  return (
    <TextField
      margin="normal"
      variant={variant}
      label={label}
      type={type}
      name={name}
      error={Boolean(displayError)}
      helperText={displayError}
      {...field}
      {...rest}
    />
  );
}

FormikText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};

FormikText.defaultProps = {
  label: '',
  type: 'text',
  variant: 'outlined',
};

export default memo(FormikText);

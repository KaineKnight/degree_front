/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useField } from 'formik';

import TextField from '@mui/material/TextField';

function FormTextField(props) {
  const [field, meta] = useField(props);

  const displayError = meta.touched && meta.error;

  return (
    <TextField
      margin="normal"
      variant="outlined"
      error={displayError}
      helperText={displayError}
      {...field}
      {...props}
    />
  );
}

export default memo(FormTextField);

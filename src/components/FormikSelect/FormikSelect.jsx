/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const FormikSelect = forwardRef((props, ref) => {
  const [field, meta] = useField(props);
  const {
    name, label, options, ...rest
  } = props;

  const displayError = meta.touched && meta.error;

  return (
    <FormControl variant="outlined" fullWidth error={displayError}>
      <InputLabel>{label}</InputLabel>
      <Select
        ref={ref}
        {...field}
        label={label}
        name={name}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {displayError && (
        <div className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
          {meta.error}
        </div>
      )}
    </FormControl>
  );
});

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
};

FormikSelect.defaultProps = {
  options: [],
  label: '',
  defaultValue: '',
};

export default FormikSelect;

/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import MuiPhoneNumber from 'material-ui-phone-number';

function FormikPhone(props) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const {
    label, defaultCountry, name, variant, ...rest
  } = props;
  return (
    <MuiPhoneNumber
      variant={variant}
      margin="normal"
      label={label}
      defaultCountry={defaultCountry}
      name={name}
      onChange={(value) => {
        field.onChange({ target: { name: field.name, value } });
      }}
      onBlur={field.onBlur}
      value={field.value}
      error={touched && Boolean(error)}
      helperText={touched && error}
      {...rest}
    />
  );
}

FormikPhone.propTypes = {
  name: PropTypes.string.isRequired,
  defaultCountry: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
};

FormikPhone.defaultProps = {
  label: '',
  defaultCountry: 'ru',
  variant: 'outlined',
};

export default memo(FormikPhone);

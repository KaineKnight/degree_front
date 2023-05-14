/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import styles from './FormikSelect.module.css';

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function FormikSelect(props) {
  const [field, meta] = useField(props);
  const {
    name, label, options, ...rest
  } = props;

  const displayError = meta.touched && meta.error;

  const optionsJSX = options.map((option) => {
    const priceAndTime = option?.price ? `${option.price} рублей\t${option.time} часов` : '';
    return (
      <MenuItem
        key={makeid(5)}
        value={option.id}
        className={styles.menuItem}
      >
        {`${option.title} ${priceAndTime}`}
      </MenuItem>
    );
  });

  return (
    <FormControl variant="outlined" fullWidth error={Boolean(displayError)}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        label={label}
        name={name}
        {...rest}
      >
        {optionsJSX}
      </Select>
      {displayError && (
        <div className={styles.error}>
          {meta.error}
        </div>
      )}
    </FormControl>
  );
}

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

export default memo(FormikSelect);

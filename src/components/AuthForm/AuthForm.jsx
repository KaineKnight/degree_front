import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import { authRequest } from '../../redux/actions/authActions';
import FormikText from '../FormikText';

import {
  BlueButton,
  LOGIN,
  REGISTRATION,
  SIGN_UP,
  SWITCH_TO,
  authFormBoxStyle,
  authHeaderStyle,
  initialValues,
  loginFields,
  loginValidationSchema,
  registerValidationSchema,
  signUpFields,
} from './constants';

import styles from './AuthForm.module.css';

function AuthForm({ isRegisterButton }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.auth.isLoading);
  const error = useSelector((store) => store.auth.error);

  const [isRegisterForm, setIsRegisterForm] = useState(isRegisterButton);

  const handleSubmit = (values) => dispatch(authRequest({ values, isRegisterForm }));

  const switchFormType = () => setIsRegisterForm(!isRegisterForm);

  const formFields = isRegisterForm ? signUpFields : loginFields;

  return (
    <Box sx={authFormBoxStyle}>
      <Typography variant="h3" sx={authHeaderStyle}>
        {isRegisterForm ? REGISTRATION : LOGIN}
      </Typography>
      {isLoading && <CircularProgress />}
      {error?.message && <Alert severity="error">{error.message}</Alert>}
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={
          isRegisterForm
            ? loginValidationSchema.concat(registerValidationSchema)
            : loginValidationSchema
        }
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          {formFields.map((textField) => (
            <FormikText
              required={textField.isRequired}
              key={textField.name}
              name={textField.name}
              type={textField.type}
              placeholder={textField.placeholder}
              label={textField.label}
            />
          ))}
          <BlueButton
            endIcon={<LoginIcon />}
            variant="contained"
            type="submit"
          >
            {isRegisterForm ? SIGN_UP : LOGIN}
          </BlueButton>
          <Button sx={{ my: 1 }} type="reset" onClick={switchFormType}>
            {SWITCH_TO}
            {isRegisterForm ? LOGIN : SIGN_UP}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

AuthForm.propTypes = {
  isRegisterButton: PropTypes.bool,
};

AuthForm.defaultProps = {
  isRegisterButton: false,
};

export default memo(AuthForm);

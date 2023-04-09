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

import { authRequest } from '../../redux/actions/authActions';
import FormTextField from '../FormTextField';

import {
  LOGIN,
  REGISTRATION,
  SIGN_UP,
  SWITCH_TO,
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
    <Box sx={
      {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        padding: '10px 40px',
        boxShadow: '5px 5px 10px #979797',
        minWidth: '50%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '450px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        backgroundColor: 'white',
      }
    }
    >
      <Typography
        variant="h3"
        sx={
        {
          p: '10px',
          textAlign: 'center',
        }
      }
      >
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
            <FormTextField
              required
              key={textField.name}
              name={textField.name}
              type={textField.type}
              placeholder={textField.placeholder}
              label={textField.label}
            />
          ))}
          <Button variant="contained" type="submit">
            {isRegisterForm ? SIGN_UP : LOGIN}
          </Button>
          <Button type="reset" onClick={switchFormType}>
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
  isRegisterButton: true,
};

export default memo(AuthForm);

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Alert, Avatar, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';

import { FORM_REQUEST_TITLE } from './constants';
import { Form, Formik } from 'formik';
import FormikText from '../FormikText';
import FormikSelect from '../FormikSelect';

const userStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
};

/*
<Box sx={userStyle}>
        <Avatar src="" sx={{ width: 30, height: 30 }} />
        <Typography fontWeight={500} variant="span">John Doe</Typography>
      </Box>
      */

function RequestForm() {
  const dispatch = useDispatch();

  const isLoading = null;
  const error = null;
  return (
    <>
      <Typography variant="h6" color="gray" textAlign="center">
        {FORM_REQUEST_TITLE}
      </Typography>
      {isLoading && <CircularProgress />}
      {error?.message && <Alert severity="error">{error.message}</Alert>}
      <Formik>
        <Form>
          <FormikText />
          {/* <FormikSelect /> */}
          <Button>submit</Button>
        </Form>
      </Formik>
    </>
  );
}

export default memo(RequestForm);

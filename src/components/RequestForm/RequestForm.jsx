import React, {
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';

import FormikText from '../FormikText';
import FormikSelect from '../FormikSelect';
import FormikPhone from '../FormikPhone';

import { FORM_REQUEST_TITLE, initialValues, validationSchema } from './constants';

import styles from './RequestForm.module.css';

function RequestForm() {
  const dispatch = useDispatch();

  const category = useRef(null);
  const brand = useRef(null);

  const [isProblemDisabled, setIsProblemDisabled] = useState(true);
  useEffect(() => {
    if (category.current?.value && brand.current?.value) {
      // send request to get problems options
      setIsProblemDisabled(false);
    }
  }, [category.current?.value, brand.current?.value]);

  const isLoading = null;
  const error = null;
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // ...
  ];
  return (
    <>
      <Typography variant="h6" color="gray" textAlign="center">
        {FORM_REQUEST_TITLE}
      </Typography>
      {isLoading && <CircularProgress />}
      {error?.message && <Alert severity="error">{error.message}</Alert>}
      <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
        <Form className={styles.form}>
          <Box className={styles.userInfo}>
            <Avatar src="" className={styles.avatar} />
            <Box>
              <Box className={styles.nameAndPhone}>
                <FormikText name="contactName" label="name" required />
                <FormikPhone name="contactPhone" label="lolo" required />
              </Box>
              <FormikText name="contactEmail" type="email" label="email" fullWidth />
            </Box>
          </Box>

          <FormikText name="title" label="title" fullWidth required />
          <FormikText name="description" label="desc" multiline rows={4} fullWidth />
          <Box className={styles.selects}>
            <FormikSelect ref={category} name="categoryId" label="category" options={options} fullWidth />
            <FormikSelect ref={brand} name="brandId" label="brand" options={options} fullWidth />
          </Box>
          <FormikSelect disabled={isProblemDisabled} name="problemTitle" label="problem" options={options} fullWidth />
          <Button className={styles.submit} variant="outlined">submit</Button>
        </Form>
      </Formik>
    </>
  );
}

export default memo(RequestForm);

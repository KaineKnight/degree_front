import React, {
  memo,
  useEffect,
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

import {
  FORM_REQUEST_TITLE,
  fields,
  initialValues,
  validationSchema,
} from './constants';

import styles from './RequestForm.module.css';

const optionsCategory = [
  { value: 'coption1', label: 'cOption 1' },
  { value: 'coption2', label: 'cOption 2' },
  // ...
];
const optionsBrand = [
  { value: 'boption1', label: 'bOption 1' },
  { value: 'boption2', label: 'bOption 2' },
  // ...
];
const optionsProblem = [
  { value: 'boption1', label: 'bOption 1' },
  { value: 'boption2', label: 'bOption 2' },
  // ...
];
const optionsModel = [
  { value: 'moption1', label: 'mOption 1' },
  { value: 'moption2', label: 'mOption 2' },
  // ...
];

function RequestForm() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [isProblemDisabled, setIsProblemDisabled] = useState(true);
  const [isModelDisabled, setIsModelDisabled] = useState(true);

  useEffect(() => {
    if (category && brand) {
      setIsModelDisabled(false);
      // get model options
    }
  }, [category, brand]);

  useEffect(() => {
    if (model) {
      setIsProblemDisabled(false);
      // get problem options
    }
  }, [model]);

  const isLoading = null;
  const error = null;

  const handleSubmit = (values) => {
    debugger;
    console.log(values);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };
  const handleBrandChange = (value) => setBrand(value);
  const handleModelChange = (value) => setModel(value);

  return (
    <>
      <Typography variant="h6" color="gray" textAlign="center">
        {FORM_REQUEST_TITLE}
      </Typography>
      {isLoading && <CircularProgress />}
      {error?.message && <Alert severity="error">{error.message}</Alert>}
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form className={styles.form}>
            <Box className={styles.userInfo}>
              <Avatar src="" className={styles.avatar} />
              <Box>
                <Box className={styles.nameAndPhone}>
                  <FormikText
                    name={fields.name.name}
                    label={fields.name.label}
                    required
                  />
                  <FormikPhone
                    name={fields.phone.name}
                    label={fields.phone.label}
                    required
                  />
                </Box>
                <FormikText
                  name={fields.email.name}
                  label={fields.email.label}
                  type="email"
                  fullWidth
                />
              </Box>
            </Box>

            <FormikText
              name={fields.title.name}
              label={fields.title.label}
              fullWidth
              required
            />
            <FormikText
              name={fields.description.name}
              label={fields.description.label}
              multiline
              rows={4}
              fullWidth
            />
            <Box className={styles.selects}>
              <FormikSelect
                onChange={(event) => {
                  handleChange(event);
                  handleCategoryChange(event.target.value);
                }}
                name={fields.category.name}
                label={fields.category.label}
                options={optionsCategory}
                fullWidth
              />
              <FormikSelect
                onChange={(event) => {
                  handleChange(event);
                  handleBrandChange(event.target.value);
                }}
                name={fields.brand.name}
                label={fields.brand.label}
                options={optionsBrand}
                fullWidth
              />
            </Box>
            <FormikSelect
              onChange={(event) => {
                handleChange(event);
                handleModelChange(event.target.value);
              }}
              className={styles.rowSelect}
              disabled={isModelDisabled}
              name={fields.model.name}
              label={fields.model.label}
              options={optionsModel}
              fullWidth
            />
            <FormikSelect
              className={styles.rowSelect}
              disabled={isProblemDisabled}
              name={fields.problem.name}
              label={fields.problem.label}
              options={optionsProblem}
              fullWidth
            />
            <Button className={styles.submit} type="submit" variant="outlined">submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default memo(RequestForm);

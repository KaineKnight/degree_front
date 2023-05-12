import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { brandsRequest, categoriesRequest, modelsRequest, problemsRequest } from '../../redux/actions';

function RequestForm() {
  const dispatch = useDispatch();

  const brands = useSelector((store) => store.brands.brands);
  const categories = useSelector((store) => store.categories.categories);
  const models = useSelector((store) => store.models.models);
  const problems = useSelector((store) => store.problems.problems);

  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [isProblemDisabled, setIsProblemDisabled] = useState(true);
  const [isModelDisabled, setIsModelDisabled] = useState(true);

  useEffect(() => {
    dispatch(brandsRequest());
    dispatch(categoriesRequest());
  }, []);

  useEffect(() => {
    if (category && brand) {
      setIsModelDisabled(false);
      dispatch(modelsRequest());
    }
  }, [category, brand]);

  useEffect(() => {
    if (model) {
      setIsProblemDisabled(false);
      dispatch(problemsRequest());
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
                options={categories}
                fullWidth
              />
              <FormikSelect
                onChange={(event) => {
                  handleChange(event);
                  handleBrandChange(event.target.value);
                }}
                name={fields.brand.name}
                label={fields.brand.label}
                options={brands}
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
              options={models}
              fullWidth
            />
            <FormikSelect
              className={styles.rowSelect}
              disabled={isProblemDisabled}
              name={fields.problem.name}
              label={fields.problem.label}
              options={problems}
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

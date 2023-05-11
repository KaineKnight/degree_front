import * as Yup from 'yup';

export const FORM_REQUEST_TITLE = 'Форма на отправление заявки';
export const SUBMIT_BUTTON = 'Отправить';

export const initialValues = {
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  title: '',
  description: '',
  categoryId: '',
  brandId: '',
  modelId: '',
  problemTitle: '',
};

export const validationSchema = Yup.object().shape({
  contactName: Yup.string()
    .trim('No white spaces at start or end!')
    .max(255, 'Must be 255 character or less')
    .required('Required contact name'),
  contactPhone: Yup.string()
    .trim()
    .max(255, 'Must be 255 character or less')
    .required('Required contact name'),
  contactEmail: Yup.string()
    .trim('No white spaces at start or end!')
    .email('Invalid email address')
    .max(255, 'Must be 255 characters or less'),
  title: Yup.string()
    .trim()
    .required(),
  description: Yup.string()
    .trim(),
  categoryId: Yup.string()
    .required(),
  brandId: Yup.string()
    .required(),
  // modelId: Yup.string()
  //   .required(),
  problemTitle: Yup.string()
    .required(),
});

/*

const dispatch = useDispatch();

  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  // const [model, setModel] = useState(null);
  const [isProblemDisabled, setIsProblemDisabled] = useState(true);
  // const [isModelDisabled, setIsModelDisabled] = useState(true);

  // useEffect(() => {
  //   if (category && brand && isModelDisabled) setIsModelDisabled(false);
  //   // modelRef.current?.value('');
  // }, [category, brand]);

  // useEffect(() => {
  //   if (model && isProblemDisabled) setIsProblemDisabled(false);
  //   // problemRef.current?.value('');
  // }, [model]);


  
  const handleCategoryChange = (value) => setCategory(value);
  const handleBrandChange = (value) => setBrand(value);
  const handleModelChange = (value) => setModel(value);

*/

/*

import React, {
  memo,
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

  const isLoading = null;
  const error = null;

  const handleSubmit = (values) => {};


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
                  <FormikText name="contactName" label="name" required />
                  <FormikPhone name="contactPhone" label="lolo" required />
                </Box>
                <FormikText name="contactEmail" type="email" label="email" fullWidth />
              </Box>
            </Box>

            <FormikText name="title" label="title" fullWidth required />
            <FormikText name="description" label="desc" multiline rows={4} fullWidth />
            <Box className={styles.selects}>
              <FormikSelect
                // onChange={(event) => {
                //   handleChange(event);
                //   handleCategoryChange(event.target.value);
                // }}
                name="categoryId"
                label="category"
                options={optionsCategory}
                fullWidth
              />
              <FormikSelect
                // onChange={(event) => {
                //   handleChange(event);
                //   handleBrandChange(event.target.value);
                // }}
                name="brandId"
                label="brand"
                options={optionsBrand}
                fullWidth
              />
              <FormikSelect
              className={styles.rowSelect}
              // onChange={(event) => {
              //   handleChange(event);
              //   handleBrandChange(event.target.value);
              // }}
              // disabled
              name="model"
              label="model"
              options={optionsModel}
              fullWidth
            />
            </Box>
            
            <FormikSelect
              className={styles.rowSelect}
              // disabled={isProblemDisabled}
              name="problemTitle"
              label="problem"
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

*/
import * as Yup from 'yup';

import styled from '@emotion/styled';
import { Button } from '@mui/material';

// validation
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Неверный Email')
    .max(255, '255 сиволов или меньше')
    .required('Обязательное поле'),
  password: Yup.string()
    .trim()
    .max(255, '255 символов или меньше')
    .matches(/^[a-zA-z0-9@$!%*#?&]+$/, 'Только латинские символы, числа и @$!%*#?&')
    .required('Пароль обязателен'),
});

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .max(255, 'Имя не длиннее 255 символов')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .trim()
    .max(255, 'Фамилия не длиннее 255 символов')
    .required('Обязательное поле'),
});

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const loginFields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'charles@barkley.com',
    label: 'Email',
    isRequired: true,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: '********',
    label: 'Пароль',
    isRequired: true,
  },
];

export const signUpFields = [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'Tony',
    label: 'Имя',
    isRequired: true,
  },
  {
    name: 'lastName',
    type: 'text',
    placeholder: 'Soprano',
    label: 'Фамилия',
    isRequired: true,
  },
  ...loginFields,
];

// string constants
export const REGISTRATION = 'Регистрация';
export const LOGIN = 'Войти';
export const SWITCH_TO = 'К ';
export const SIGN_UP = 'Регистрации';
export const TO_LANDING = 'К приветственной странице';

export const BlueButton = styled(Button)({
  backgroundColor: '#4365C9',
  '&:hover': {
    backgroundColor: '#334A92',
  },
});

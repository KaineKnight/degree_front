import * as Yup from 'yup';

import styled from '@emotion/styled';
import { Button } from '@mui/material';

// styles
export const authFormBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  padding: '10px 40px',
  boxShadow: '5px 5px 10px #979797',
  minWidth: '20%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '450px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  backgroundColor: 'white',
};

export const authHeaderStyle = {
  p: '10px',
  textAlign: 'center',
};

// validation
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim('No white spaces at start or end!')
    .email('Invalid email address')
    .max(255, 'Must be 255 characters or less')
    .required('Required email'),
  password: Yup.string()
    .trim('No white spaces at start or end!')
    .max(255, 'Must be 255 characters or less')
    .matches(/^[a-zA-z0-9@$!%*#?&]+$/, 'Must contain only latin characters, numbers and @$!%*#?&')
    .required('Required password'),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim('No white spaces at start or end!')
    .max(255, 'Must be 255 characters or less')
    .required('Required name'),
});

export const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const loginFields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'charles@barkley.com',
    label: 'Your email',
    isRequired: true,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'password',
    label: 'Your password',
    isRequired: true,
  },
];

export const signUpFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Tony Soprano',
    label: 'Your Name',
    isRequired: true,
  },
  ...loginFields,
];

// string constants
export const REGISTRATION = 'Registration';
export const LOGIN = 'Login';
export const SWITCH_TO = 'Switch to ';
export const SIGN_UP = 'SIGN UP';

export const BlueButton = styled(Button)({
  backgroundColor: '#4365C9',
  '&:hover': {
    backgroundColor: '#334A92',
  },
});

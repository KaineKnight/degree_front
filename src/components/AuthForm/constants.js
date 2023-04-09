import * as Yup from 'yup';

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
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'password',
    label: 'Your password',
  },
];

export const signUpFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Tony Soprano',
    label: 'Your Name',
  },
  ...loginFields,
];

export const REGISTRATION = 'Registration';
export const LOGIN = 'Login';
export const SWITCH_TO = 'Switch to ';
export const SIGN_UP = 'SIGN UP';

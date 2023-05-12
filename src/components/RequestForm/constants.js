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
  modelId: Yup.string()
    .required(),
  problemTitle: Yup.string()
    .required(),
});

export const fields = {
  name: { name: 'contactName', label: 'Имя' },
  phone: { name: 'contactPhone', label: 'Номер телефона' },
  email: { name: 'contactEmail', label: 'Почта (необязательно)' },
  title: { name: 'title', label: 'Название заявки' },
  description: { name: 'description', label: 'Описание' },
  category: { name: 'categoryId', label: 'Категория' },
  brand: { name: 'brandId', label: 'Бренд' },
  model: { name: 'modelId', label: 'Модель' },
  problem: { name: 'problemTitle', label: 'Возможные проблемы' },
};

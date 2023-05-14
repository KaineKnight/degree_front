import * as Yup from 'yup';

export const FORM_REQUEST_TITLE = 'Форма на отправление заявки';
export const SUBMIT_BUTTON = 'Отправить';
export const TRACK_NUMBER_TITLE = 'Трек-номер вашей заявки';
export const SAVE_TRACK_NUMBER = 'Сохраните его, чтобы не потерять';
export const SEND_MORE_REQUESTS = 'Отправить еще заявку';

export const initialValues = {
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  title: '',
  description: '',
  categoryId: '',
  brandId: '',
  modelId: '',
  problemId: '',
};

export const validationSchema = Yup.object().shape({
  contactName: Yup.string()
    .trim()
    .max(255, 'Не более 255 символов на имя')
    .required('Контактное имя обязательно'),
  contactPhone: Yup.string()
    .trim()
    .required('Контактный номер обязателен'),
  contactEmail: Yup.string()
    .trim()
    .email('Неверный формат адреса email')
    .max(255, 'email не более 255 символов'),
  title: Yup.string()
    .trim()
    .required('Заголовок заявки обязателен'),
  description: Yup.string()
    .trim(),
  categoryId: Yup.string()
    .required('Выберите категорию'),
  brandId: Yup.string()
    .required('Выберите бренд'),
  modelId: Yup.string()
    .required('Выберите модель'),
  problemId: Yup.string()
    .required('Выберите проблему из списка'),
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
  problem: { name: 'problemId', label: 'Возможные проблемы' },
};

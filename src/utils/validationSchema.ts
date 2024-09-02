import * as yup from 'yup';

export interface FormValues {
  insideInvoiceNumber: string;
  sender: string;
  recipient: string;
}

export const Schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  insideInvoiceNumber: yup
    .string()
    .required('Поле обязательно')
    .matches(/^\d+$/, 'Поле должно содержать только цифры')
    .max(20, 'Поле должно содержать не более 20 цифр')
    .test(
      'is-positive',
      'Поле должно содержать положительное число',
      (value) => value !== undefined && parseInt(value) > 0,
    ),
  sender: yup
    .string()
    .max(50, 'Строка не должна превышать 50 символов')
    .required('Поле обязательно'),
  recipient: yup
    .string()
    .max(50, 'Строка не должна превышать 50 символов')
    .required('Поле обязательно'),
});

import { FormFieldType } from './fieldTypes.js';

export const animalFields = [
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'name',
      rules: [{ required: true, message: 'Введите кличку' }],
      placeholder: 'Кличка',
    },
    fieldProps: { placeholder: '' },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'breed',
      label: 'breed',
      rules: [{ required: true, message: 'Введите породу' }],
      placeholder: 'Порода',
    },
    fieldProps: { placeholder: '' },
  },
  {
    type: FormFieldType.Radio,
    formItemProps: {
      name: 'gender',
      label: 'gender',
      rules: [{ required: true, message: '' }],
    },
    fieldProps: {
      options: [
        { label: 'Мальчик', value: 'MAL' },
        { label: 'Девочка', value: 'FEM' },
      ],
    },
  },

  {
    placeholder: 'Год рождения',
    name: 'birth_year',
    rules: [{ required: true, message: 'Введите год рождения' }],
    type: 'year',
  },
];

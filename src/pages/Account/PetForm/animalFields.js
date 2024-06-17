import { FormFieldType } from './fieldTypes';

export const animalFields = [
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'name',
      label: 'name',
      rules: [{ required: true, message: '' }],
    },
    fieldProps: { placeholder: '' },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'breed',
      label: 'breed',
      rules: [{ required: true, message: '' }],
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
];

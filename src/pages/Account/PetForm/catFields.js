import { animalFields } from './animalFields';
import { FormFieldType } from './fieldTypes';

export const catFields = [
  ...animalFields,
  {
    type: FormFieldType.Radio,
    formItemProps: { name: 'outside_lb', label: 'outside_lb' },
    fieldProps: {
      options: [
        { label: 'Да', value: 'YES' },
        { label: 'Нет', value: 'NO' },
        { label: 'Не знаю точно', value: 'SMT' },
      ],
    },
  },
];

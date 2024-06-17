import { animalFields } from './animalFields';
import { FormFieldType } from './fieldTypes';

export const dogFields = [
  ...animalFields,
  {
    type: FormFieldType.Radio,
    formItemProps: { name: 'pulls', label: 'pulls' },
    fieldProps: {
      options: [
        { label: 'Да', value: 'YES' },
        { label: 'Нет', value: 'NO' },
        { label: 'Не знаю точно', value: 'SMT' },
      ],
    },
  },
];

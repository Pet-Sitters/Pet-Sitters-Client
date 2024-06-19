import { animalFields } from './animalFields.js';
import { FormFieldType } from './fieldTypes.js';

export const catFields = [
  ...animalFields,
  {
    type: FormFieldType.Input,
    formItemProps: { name: 'Дерет мебель?'},
    fieldProps: {
      options: [
        { label: 'Да', value: 'YES' },
        { label: 'Нет', value: 'NO' },
        { label: 'Не знаю точно', value: 'SMT' },
      ],
      placeholder: 'Дерет мебель?',
    },
  },
  {
    type: FormFieldType.Radio,
    formItemProps: { name: 'outside_lb', label: 'Ходит мимо лотка?' },
    fieldProps: {
      options: [
        { label: 'Да', value: 'YES' },
        { label: 'Нет, никогда', value: 'NO' },
        { label: 'Да, но если лоток грязный', value: 'SMT' },
      ],
    },
  },
];

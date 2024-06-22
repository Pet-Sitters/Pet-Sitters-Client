import { FormFieldType } from '../../core/constants/fieldTypes';

export const sitterFormFields = [
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'first_name',
    },
    fieldProps: {
      placeholder: 'Имя',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'last_name',
    },
    fieldProps: {
      placeholder: 'Фамилия',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'patronym',
    },
    fieldProps: {
      placeholder: 'Отчество',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['user', 'username'],
    },
    fieldProps: {
      placeholder: 'email',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'phone_num',
    },
    fieldProps: {
      placeholder: 'Номер телефона',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'tg_nick',
    },
    fieldProps: {
      placeholder: 'Ваш ник в Telegram',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'social',
    },
    fieldProps: {
      placeholder: 'Ссылка на соц сеть',
    },
  },
  {
    type: FormFieldType.Select,
    formItemProps: {
      name: 'city',
    },
    fieldProps: {
      placeholder: 'Город',
      options: [
        { label: 'Ереван', value: 'EVN' },
        { label: 'Дилижан', value: 'DLN' },
        { label: 'Гюмри', value: 'GMR' },
        { label: 'Москва', value: 'MOW' },
        { label: 'Санкт-Петербург', value: 'SPB' },
        { label: 'Другое', value: 'OTH' },
      ],
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'address',
    },
    fieldProps: {
      placeholder: 'address',
    },
  },
  {
    type: FormFieldType.Select,
    formItemProps: {
      name: 'animals',
    },
    fieldProps: {
      placeholder: 'Животные дома',
      options: [
        { label: 'Кошка', value: 'CAT' },
        { label: 'Собака', value: 'DOG' },
        { label: 'Другое', value: 'OTH' },
        { label: 'Нет', value: 'NO' },
      ],
    },
  },
  {
    type: FormFieldType.Select,
    formItemProps: {
      name: 'home',
    },
    fieldProps: {
      placeholder: 'Тип жилья',
      options: [
        { label: 'Квартира', value: 'FLAT' },
        { label: 'Частный дом', value: 'HOUS' },
      ],
    },
  },

  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'pass_num'],
    },
    fieldProps: {
      placeholder: 'Серия и номер паспорта',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'given_dt'],
    },
    fieldProps: {
      placeholder: 'Дата выдачи',
    },
  },
  {
    type: FormFieldType.InputNumber,
    formItemProps: {
      name: ['passport', 'given_code'],
    },
    fieldProps: {
      placeholder: 'Код подразделения',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'given_nm'],
    },
    fieldProps: {
      placeholder: 'Наименование подразделения',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'first_nm'],
    },
    fieldProps: {
      placeholder: 'Имя владельца',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'second_nm'],
    },
    fieldProps: {
      placeholder: 'Фамилия владельца',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'sur_nm'],
    },
    fieldProps: {
      placeholder: 'Отчество владельца',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'birth_dt'],
    },
    fieldProps: {
      placeholder: 'Дата рождения',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'addr_nm'],
    },
    fieldProps: {
      placeholder: 'Адрес прописки',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'about',
    },
    fieldProps: {
      placeholder: 'О себе',
    },
  },
];

export const formInputs = [
  {
    placeholder: 'Имя',
    name: 'firstName',
    rules: [{ required: true, message: 'Введите имя' }],
  },
  {
    placeholder: 'Фамилия',
    name: 'lastName',
    rules: [{ required: true, message: 'Введите фамилию' }],
  },
  {
    placeholder: 'E-mail*',
    name: 'email',
    rules: [
      { required: true, message: 'Введите E-mail' },
      { type: 'email', message: 'Введите действительный E-mail' },
    ],
  },
  {
    placeholder: 'Номер телефона*',
    name: 'phoneNumber',
    rules: [
      { required: true, message: 'Введите номер телефона' },
      {
        pattern: /^(?:\+7|8)?\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
        message: 'Введите действительный номер телефона',
      },
    ],
  },
  {
    placeholder: 'Ник в Telegram*',
    name: 'telegramUsername',
    rules: [{ required: true, message: 'Введите ник в Telegram' }],
  },
  {
    placeholder: 'Город проживания*',
    name: 'city',
    rules: [{ required: true, message: 'Введите город проживания' }],
  },
];

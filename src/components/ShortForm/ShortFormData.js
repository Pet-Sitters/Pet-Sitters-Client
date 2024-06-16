export const shortFormInputs = [
  {
    placeholder: 'Как вас зовут',
    name: 'name',
    rules: [{ required: true, message: 'Введите имя пользователя' }],
  },
  {
    placeholder: 'Ваш ник в Telegram или номер телефона',
    name: 'tg_nick',
    rules: [{ required: true, message: 'Введите ник в Telegram или номер телефона' }],
  },
  {
    placeholder: 'Ваш армянский номер телефона',
    name: 'phone_num',
    rules: [{ required: true, message: 'Введите ваш номер телефона' }],
  },
];

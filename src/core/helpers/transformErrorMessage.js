export const transformErrorMessage = (message) => {
  if (message.includes('Пользователь with this Почта already exists.')) {
    return 'Пользователь с таким Email уже существует.';
  }
  return message;
};

// {


//     "birth_year": "2024-06-14",
//     "immunized": true,

//     "emergency_contact": "string",
//     "diseases": "string",
//     "fears": "string",
//     "features": "string",
//     "outside_lb": "NO",
//     "scratch": "string",
//     "pulls": "NO",
//     "picks": "NO",
//     "take": "YES",
//     "aggression": "string",
//     "no_leash": "YES",
//     "dogs_contact": "YES",
//     "wash_paws": "BATH",
//     "pee_home": "YES",
//     "gnaw_home": "NO",
//     "walk": "NO"
// }

export const animalTypes = [
  {
    label: 'Кошка',
    value: 'CAT',
  },
  {
    label: 'Собака',
    value: 'DOG',
  },
  {
    label: 'Другое',
    value: 'other',
  },
];

export const formInputs = [
  {
    placeholder: 'Кличка',
    name: 'name',
    rules: [{ required: true, message: 'Введите кличку' }],
  },
  {
    placeholder: 'Порода',
    name: 'breed',
    rules: [{ required: true, message: 'Введите породу' }],
  },
  {
    placeholder: 'Возраст (лет)',
    name: 'age',
    rules: [{ required: true, message: 'Введите возраст' }],
    type: 'number',
  },
  {
    placeholder: 'Вес (кг)',
    name: 'weight',
    rules: [{ required: true, message: 'Введите вес' }],
    type: 'number',
  },
];

export const formRadioGroups = [
  {
    label: 'Пол',
    name: 'gender',
    options: [
      { label: 'Мальчик', value: 'MALE' },
      { label: 'Девочка', value: 'FEM' },
    ],
  },
  {
    label: 'Питомец кастрирован/стерилизован?',
    name: 'sterilized',
    options: [
      { label: 'Да', value: true },
      { label: 'Нет', value: false },
      { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label:
      'Питомец имеет все необходимые вакцинации в соответствии с ветеринарными требованиями?',
    name: 'isVaccinated',
    options: [
      { label: 'Да', value: 'yes' },
      { label: 'Нет', value: 'no' },
      { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label: 'Питомец имеет ветеринарный паспорт?',
    name: 'vet_ppt',
    options: [
      { label: 'Да', value: true },
      { label: 'Нет', value: false },
      { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label: 'Питомец имеет какие-либо патологии?',
    name: 'hasPathologies',
    options: [
      { label: 'Да', value: 'yes' },
      { label: 'Нет', value: 'no' },
      { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label: 'Дружелюбен ли питомец к другим собакам/кошкам?',
    name: 'isFriendly',
    options: [
      { label: 'Да', value: 'yes' },
      { label: 'Нет', value: 'no' },
    ],
  },
  {
    label:
      'Наблюдается ли питомeц в конкретной ветеринарной клинике/у конкретного ветеринарного врача?',
    name: 'isObserved',
    options: [
      { label: 'Да', value: 'yes' },
      { label: 'Нет', value: 'no' },
      { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
];

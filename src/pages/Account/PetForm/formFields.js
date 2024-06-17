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
    value: 'OTH',
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
  // {
  //   placeholder: 'Возраст (лет)',
  //   name: 'age',
  //   rules: [{ required: true, message: 'Введите возраст' }],
  //   type: 'number',
  // },
  {
    placeholder: 'Год рождения',
    name: 'birth_year',
    rules: [{ required: true, message: 'Введите год рождения' }],
    type: 'year',
  },
  {
    placeholder: 'Вес (кг)',
    name: 'weight',
    rules: [{ required: true, message: 'Введите вес' }],
    type: 'number',
  },
  {
    placeholder: 'Контакт для экстренных случаев',
    name: 'emergency_contact',
  },
  {
    placeholder: 'Страхи',
    name: 'fears',
  },
  {
    placeholder: 'Особенности',
    name: 'features',
  },
];

export const formRadioGroups = [
  {
    label: 'Пол',
    name: 'gender',
    options: [
      { label: 'Мальчик', value: 'MAL' },
      { label: 'Девочка', value: 'FEM' },
    ],
  },
  {
    label: 'Питомец кастрирован/стерилизован?',
    name: 'sterilized',
    options: [
      { label: 'Да', value: true },
      { label: 'Нет', value: false },
      // { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label:
      'Питомец имеет все необходимые вакцинации в соответствии с ветеринарными требованиями?',
    name: 'immunized',
    options: [
      { label: 'Да', value: true },
      { label: 'Нет', value: false },
      // { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label: 'Питомец имеет ветеринарный паспорт?',
    name: 'vet_ppt',
    options: [
      { label: 'Да', value: true },
      { label: 'Нет', value: false },
      // { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  {
    label: 'Питомец имеет какие-либо патологии?',
    name: 'diseases',
    options: [
      { label: 'Да', value: 'Да' },
      { label: 'Нет', value: 'Нет' },
      // { label: 'Не знаю точно', value: 'unknown' },
    ],
  },
  // {
  //   label: 'Дружелюбен ли питомец к другим собакам/кошкам?',
  //   name: 'isFriendly',
  //   options: [
  //     { label: 'Да', value: 'yes' },
  //     { label: 'Нет', value: 'no' },
  //   ],
  // },
  // {
  //   label:
  //     'Наблюдается ли питомeц в конкретной ветеринарной клинике/у конкретного ветеринарного врача?',
  //   name: 'isObserved',
  //   options: [
  //     { label: 'Да', value: 'yes' },
  //     { label: 'Нет', value: 'no' },
  //     { label: 'Не знаю точно', value: 'unknown' },
  //   ],
  // },
];

export const formDogRadioGroups = [
  {
    label: 'Тянет поводок?',
    name: 'pulls',
    options: [
      { label: 'Сильно тянет', value: 'YES' },
      { label: 'Не тянет', value: 'NO' },
      { label: 'Иногда тянет', value: 'SMT' },
    ],
  },
  {
    label: 'Подбирает с земли?',
    name: 'picks',
    options: [
      { label: 'Постоянно', value: 'YES' },
      { label: 'Не подбирает', value: 'NO' },
      { label: 'Иногда подбирает', value: 'SMT' },
    ],
  },
  {
    label: 'Можно отобрать?',
    name: 'take',
    options: [
      { label: 'Да', value: 'YES' },
      { label: 'Нет', value: 'NO' },
      { label: 'Я бы не рисковал', value: 'IDK' },
    ],
  },
  {
    label: 'Агрессии?',
    name: 'aggression',
    options: [
      { label: 'Нет', value: 'NO' },
      { label: 'Кошки', value: 'CAT' },
      { label: 'Собаки', value: 'DOG' },
      { label: 'Люди', value: 'PPL' },
      { label: 'Мотоциклы', value: 'MOT' },
      { label: 'Велосипеды', value: 'BIK' },
      { label: 'Машины', value: 'CAR' },
    ],
  },
  {
    label: 'Можно без поводка?',
    name: 'no_leash',
    options: [
      { label: 'Да', value: 'YES' },
      { label: 'Нет', value: 'NO' },
    ],
  },
  {
    label: 'Контакт с др. собаками?',
    name: 'dogs_contact',
    options: [
      { label: 'Да', value: 'YES' },
      { label: 'Нет', value: 'NO' },
    ],
  },
  {
    label: 'Как моют лапы?',
    name: 'wash_paws',
    options: [
      { label: 'Другое', value: 'OTH' },
      { label: 'Ванная+душ', value: 'BATH' },
      { label: 'Ведро+тряпка', value: 'RAG' },
      { label: 'Раковина+душ', value: 'SINK' },
      { label: 'Влажные салфетки', value: 'WIPE' },
      { label: 'Лапомойка', value: 'WASH' },
    ],
  },
  {
    label: 'Туалет дома?',
    name: 'pee_home',
    options: [
      { label: 'Да', value: 'YES' },
      { label: 'Нет', value: 'NO' },
    ],
  },
  {
    label: 'Грызет вещи?',
    name: 'gnaw_home',
    options: [
      { label: 'Часто', value: 'YES' },
      { label: 'Нет', value: 'NO' },
      { label: 'Иногда', value: 'SMT' },
    ],
  },
  {
    label: 'Сколько гулять?',
    name: 'walk',
    options: [
      { label: 'Без выгулов', value: 'NO' },
      { label: '1 раз в день', value: '1' },
      { label: '2 раза в день', value: '2' },
      { label: '3 раза в день', value: '3' },
      { label: '4 раза в день', value: '4' },
    ],
  },
]

export const formCatRadioGroups = [
  {
    label: 'Ходит мимо лотка?',
    name: 'outside_lb',
    options: [
      { label: 'Да', value: 'YES' },
      { label: 'Нет, никогда', value: 'NO' },
      { label: 'Да, но если лоток грязный', value: 'SMT' },
    ],
  },
]

export const formCatInputs = [
  {
    placeholder: 'Дерет мебель?',
    name: 'scratch',
  },
]

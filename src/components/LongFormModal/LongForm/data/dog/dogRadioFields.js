import animalRadioFields from "../animal/animalRadioFields.js";

const dogRadioFields = [
    ...animalRadioFields,
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

export default dogRadioFields;
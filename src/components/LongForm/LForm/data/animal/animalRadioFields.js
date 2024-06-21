const animalRadioFields = [
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
]

export default animalRadioFields
export const animalTypes = [
    {
        label: 'Кошка',
        value: 'cat',
    },
    {
        label: 'Собака',
        value: 'dog',
    },
    {
        label: 'Другое',
        value: 'other',
    }
]

export const formInputs = [
    {
        placeholder: 'Кличка',
        name: 'name',
        rules: [{required: true, message: 'Введите кличку'}],
    },
    {
        placeholder: 'Порода',
        name: 'breed',
        rules: [{required: true, message: 'Введите породу'}],
    },
    {
        placeholder: 'Возраст (лет)',
        name: 'age',
        rules: [{required: true, message: 'Введите возраст'}],
        type: "number",
    },
    {
        placeholder: 'Вес (кг)',
        name: 'weight',
        rules: [{required: true, message: 'Введите вес'}],
        type: "number",
    },
];

export const formRadioGroups = [
    {
        label: "Пол",
        name: "gender",
        options: [
            {label: "Мальчик", value: "male"},
            {label: "Девочка", value: "female"},
        ]
    },
    {
        label: "Питомец кастрирован/стерилизован?",
        name: "isSterilized",
        options: [
            {label: "Да", value: "yes"},
            {label: "Нет", value: "no"},
            {label: "Не знаю точно", value: "unknown"}
        ]
    },
    {
        label: "Питомец имеет все необходимые вакцинации в соответствии с ветеринарными требованиями?",
        name: "isVaccinated",
        options: [
            {label: "Да", value: "yes"},
            {label: "Нет", value: "no"},
            {label: "Не знаю точно", value: "unknown"}
        ]
    },
    {
        label: "Питомец имеет ветеринарный паспорт?",
        name: "hasPassport",
        options: [
            {label: "Да", value: "yes"},
            {label: "Нет", value: "no"},
            {label: "Не знаю точно", value: "unknown"}
        ]
    },
    {
        label: "Питомец имеет какие-либо патологии?",
        name: "hasPathologies",
        options: [
            {label: "Да", value: "yes"},
            {label: "Нет", value: "no"},
            {label: "Не знаю точно", value: "unknown"}
        ]
    },
    {
        label: "Дружелюбен ли питомец к другим собакам/кошкам?",
        name: "isFriendly",
        options: [
            {label: "Да", value: "yes"},
            {label: "Нет", value: "no"}
        ]
    },
    {
        label: "Наблюдается ли питомeц в конкретной ветеринарной клинике/у конкретного ветеринарного врача?",
        name: "isObserved",
        options: [
            {label: "Да", value: "yes"},
            {label: "Нет", value: "no"},
            {label: "Не знаю точно", value: "unknown"}
        ]
    },
]
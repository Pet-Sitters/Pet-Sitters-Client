const animalInputFields = [
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
]

export default animalInputFields

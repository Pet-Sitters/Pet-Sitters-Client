import animalRadioFields from '../animal/animalRadioFields.js';

const catInputFields = [
    ...animalRadioFields,
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

export default catInputFields;

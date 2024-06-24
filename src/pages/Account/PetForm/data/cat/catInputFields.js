import animalInputFields from '../animal/animalInputFields.js';

const catInputFields = [
    ...animalInputFields,
    {
        placeholder: 'Дерет мебель?',
        name: 'scratch',
        rules: [{ required: true, message: 'Введите вес' }],
    },
]

export default catInputFields;

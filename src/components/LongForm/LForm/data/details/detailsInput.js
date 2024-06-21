const detailInput = [
    {
        placeholder: 'С',
        name: 'from_date',
        rules: [{ required: true, message: 'Введите дату' }],
        type: 'year',
    },
    {
        placeholder: 'По',
        name: 'to_date',
        rules: [{ required: true, message: 'Введите дату' }],
        type: 'year',
    },
]

export default detailInput;

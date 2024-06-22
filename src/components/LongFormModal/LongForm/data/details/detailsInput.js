const detailInput = [
    {
        label: 'С',
        placeholder: 'ДД. ММ. ГГГГ',
        name: 'from_date',
        rules: [{ required: true, message: 'Введите дату' }],
        type: 'year',
    },
    {
        label: 'По',
        placeholder: 'ДД. ММ. ГГГГ',
        name: 'to_date',
        rules: [{ required: true, message: 'Введите дату' }],
        type: 'year',
    },
]

export default detailInput;

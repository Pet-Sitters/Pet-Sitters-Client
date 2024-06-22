const detailInputFields = [
    {
        label: 'Рассматриваете ли Вы проживание Вашего питомца с другими животными?',
        name: 'other_pets',
        options: [
            { label: 'Да', value: 'YES' },
            { label: 'Нет, никогда', value: 'NO' },
        ],
    },
    {
        label: 'Сколько раз в день нужно кормить Вашего питомца?',
        name: 'feed',
        options: [
            { label: '1 раз/день', value: '1' },
            { label: '2 раз/день', value: '2' },
            { label: '3 раз/день', value: '3' },
        ],
    },
    {
        label: 'В последний день передержки Вы заберете питомца до 12:00 или после?',
        name: 'pick_up',
        options: [
            { label: 'До 12:00', value: 'AM' },
            { label: 'После 12:00', value: 'PM' },
        ],
    },
    {
        label: 'Кто отвезёт/заберёт питомца?',
        name: 'transfer',
        options: [
            { label: 'Я самостоятельно', value: 'MP' },
            { label: 'Потребуется помощь ситтера', value: 'YP' },
        ],
    },
]

export default detailInputFields;

export type Option = {
    id: string
    label: string
}

export type Step = {
    id: string
    title: string
    options: Option[]
}

export const STEPS: Step[] = [
    {
        id: 'dateType',
        title: 'Какой тип свидания выберешь? ❤️',
        options: [
            {
                id: 'art',
                label: '🎨 Арт-свидание'
            },
            {
                id: 'aquapark',
                label: '💦 Аквапарк'
            },
            {
                id: 'quest',
                label: '🧩 Квест'
            },
            {
                id: 'oceanarium',
                label: '🐠 Океанариум'
            },
            {
                id: 'picnic',
                label: '🧺 Пикник'
            },
            {
                id: 'amusementPark',
                label: '🎡 Парк аттракционов'
            }
        ]
    },
    {
        id: 'kitchen',
        title: 'Теперь выбери, какую кухню хочешь 🍽️',
        options: [
            {
                id: 'korean',
                label: '🇰🇷 Корейская кухня'
            },
            {
                id: 'japanese',
                label: '🍣 Японская кухня'
            },
            {
                id: 'european',
                label: '🥩 Европейская кухня'
            },
            {
                id: 'italian',
                label: '🍕 Итальянская кухня'
            },
            {
                id: 'myChoice',
                label: '❤️ На мой выбор'
            }
        ]
    },
    {
        id: 'evening',
        title: 'Чем закончим вечер? 🌙',
        options: [
            {
                id: 'walk',
                label: '🌃 Прогулка'
            },
            {
                id: 'movie',
                label: '🎬 Кино'
            },
            {
                id: 'coffee',
                label: '☕ Кофе'
            },
            {
                id: 'park',
                label: '🌳 Парк'
            },
        ]
    }
]
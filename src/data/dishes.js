const Dishes = [
    {
        id: 0,
        name: 'Burger',
        image: 'assets/images/burger.jpg',
        category: 'meal',
        label: 'hot',
        price: '199',
        description: 'Just a random burger.',
        Comment: [
            {
                id: 0,
                comment: 'kharap na',
                author: 'Mr. A',
                date: '15-10-21',
            },
            {
                id: 1,
                comment: 'bhaloi',
                author: 'Mr. B',
                date: '12-5-21',
            }
        ]
    },
    {
        id: 1,
        name: 'Pizza',
        image: 'assets/images/pizza.jpg',
        category: 'meal',
        label: 'hot',
        price: '499',
        description: 'A random pizza!',
        Comment: [
            {
                id: 0,
                comment: 'choleee',
                author: 'Mr. C',
                date: '02-02-22',
            },
            {
                id: 1,
                comment: 'motamoti',
                author: 'Mr. D',
                date: '02-01-22',
            }
        ]
    },
    {
        id: 2,
        name: 'Chowmein',
        image: 'assets/images/chowmein.jpg',
        category: 'meal',
        label: 'hot',
        price: '255',
        description: 'A random maggi noodles!',
        Comment: [
            {
                id: 0,
                comment: 'not recommended',
                author: 'Mr. E',
                date: '04-04-22',
            }
        ]
    },
]

export default Dishes;
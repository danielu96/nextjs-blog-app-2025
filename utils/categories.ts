
export type Category = {
    label: CategoryLabel;
    image: string;
    color: string;
};

export type CategoryLabel =
    | 'wiedza'
    | 'inspiracje'
    | 'interpretacje'
    | 'dostępne';


export const categories: Category[] = [
    {
        label: 'wiedza',
        image: '/images/Frame 5.png',
        color: 'wiedza',
    },
    {
        label: 'inspiracje',
        image: '/images/Frame 6.png',
        color: 'inspiracje',
    },
    {
        label: 'interpretacje',
        image: '/images/Frame 7.png',
        color: 'interpretacje',
    },
    {
        label: 'dostępne',
        image: '/images/Frame 8.png',
        color: 'dostępne',
    },
];

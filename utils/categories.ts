
type Category = {
    label: CategoryLabel;
    image: string;
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
    },
    {
        label: 'inspiracje',
        image: '/images/Frame 6.png',
    },
    {
        label: 'interpretacje',
        image: '/images/Frame 7.png',
    },
    {
        label: 'dostępne',
        image: '/images/Frame 8.png',
    },
];
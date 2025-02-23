import Link from 'next/link';
// import { Button } from '../ui/button';
function EmptyList({
    heading = 'No posts available.',
    message = 'No results found with these filters.',
    btnText = 'back home',
}: {
    heading?: string;
    message?: string;
    btnText?: string;
}) {
    return (
        <div className='mt-4'>
            <h2 className='text-xl font-bold'>{heading}</h2>
            <p className='text-lg'>{message}</p>
            <button className='mt-4 capitalize' >
                <Link href='/'>{btnText}</Link>
            </button>
        </div>
    );
}
export default EmptyList;
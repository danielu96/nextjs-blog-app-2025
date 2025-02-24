
'use client';
import { PostItemProps } from "@/utils/types";
import Link from 'next/link';
import { categoryColors } from "@/utils/categories";




const PostItem: React.FC<PostItemProps> = ({ id, title, body, dateAdded, category }) => {
    return (
        <div className="card">
            <div className={`mt-2 text-sm font-semibold ${categoryColors[category.label]} mb-2 underline uppercase`}>{category.label}</div>
            <h2 className="text-2xl font-bold mt-2 text-slate-800 h-10">{title}</h2>
            <div className='position relative  top-[100px] min-h-[32px]'>   {dateAdded && <p className="font-bold text-2xl text-gray-500">{new Date(dateAdded).toLocaleDateString()}</p>}</div>
            <p className="mt-36 h-24">{body.substring(0, 200)}...</p>
            <div className="flex justify-between mt-14">
                <Link href={`/posts/${id}`}>
                    <span className="text-gray-950 text-xl font-bold">zobacz więcej →</span>
                </Link>

            </div>
        </div>
    );
};

export default PostItem;
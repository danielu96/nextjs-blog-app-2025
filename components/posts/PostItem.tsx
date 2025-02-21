
'use client';
import { PostItemProps } from "@/utils/types";
import Link from 'next/link';


const PostItem = ({ id, title, body }: PostItemProps) => {
    return (
        <div className="card">
            <h2 className="text-2xl font-bold mt-2 text-slate-800 h-10">{title}</h2>
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
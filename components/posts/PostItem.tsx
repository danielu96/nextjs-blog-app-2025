
'use client';
import { PostItemProps } from "@/utils/types";


const PostItem = ({ title, body }: PostItemProps) => {
    return (
        <div className="card">
            <h2 className="text-2xl font-bold mt-2 text-slate-800 h-10">{title}</h2>
            <p className="mt-36 h-24">{body.substring(0, 200)}...</p>
        </div>
    );
};

export default PostItem;
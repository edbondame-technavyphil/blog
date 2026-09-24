import React from 'react';
import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  // Extract MongoDB Object ID string format
  const idString = typeof post._id === 'object' ? post._id.$oid : post._id;

  return (
    <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
          <button
            onClick={() => onDelete(idString)}
            className="text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 bg-red-50 rounded hover:bg-red-100 transition"
          >
            Delete
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          By <span className="font-semibold text-slate-700">{post.author}</span>
        </p>
        <p className="text-slate-600 whitespace-pre-line leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
};
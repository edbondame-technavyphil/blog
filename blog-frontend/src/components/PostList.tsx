import React from 'react';
import { PostCard } from './PostCard';
import type { Post } from '../types/post';


interface PostListProps {
  posts: Post[];
  onDeletePost: (id: string) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onDeletePost }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
        <p className="text-slate-500">No blog posts yet. Be the first to publish one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Latest Articles</h2>
      {posts.map((post) => {
        const idString = typeof post._id === 'object' ? post._id.$oid : post._id;
        return <PostCard key={idString} post={post} onDelete={onDeletePost} />;
      })}
    </div>
  );
};
// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import type { Post, NewPostInput } from './types/post';
import { fetchPosts, createPost, deletePost, getPostId } from './services/api';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleCreatePost = async (newPostData: NewPostInput) => {
    const created = await createPost(newPostData);
    setPosts((prev) => [created, ...prev]);
  };

  const handleDeletePost = async (id: string) => {
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => getPostId(p) !== id));
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <Header />
      <main className="max-w-4xl mx-auto px-4 pt-8">
        <PostForm onPostCreated={handleCreatePost} />
        {loading ? (
          <div className="text-center text-slate-500 py-8">Loading posts...</div>
        ) : (
          <PostList posts={posts} onDeletePost={handleDeletePost} />
        )}
      </main>
    </div>
  );
};

export default App;
import axios from 'axios';
import type { Post, NewPostInput } from '../types/post';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const getPostId = (post: Post): string => {
  if (typeof post._id === 'object' && post._id !== null && '$oid' in post._id) {
    return post._id.$oid;
  }
  return String(post._id);
};

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (postData: NewPostInput): Promise<Post> => {
  try {
    // Nested inside `post` object to match Rails params.require(:post)
    const response = await api.post('/posts', { post: postData });
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      const serverErrors = error.response.data.errors || [
        error.response.data.error || 'Server error',
      ];
      throw new Error(JSON.stringify(serverErrors));
    }
    throw new Error(JSON.stringify(['Network error / Failed to connect to server']));
  }
};

export const deletePost = async (id: string): Promise<void> => {
  await api.delete(`/posts/${id}`);
};
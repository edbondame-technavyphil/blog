export interface Post {
  _id: { $oid: string } | string;
  title: string;
  content: string;
  author: string;
  created_at?: string;
}

export interface NewPostInput {
  title: string;
  content: string;
  author: string;
}
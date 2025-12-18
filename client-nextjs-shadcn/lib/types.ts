export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
}

export interface Comment {
  id: string;
  text: string;
  user: string;
  createdAt?: string;
}

export interface User {
  id: string;
  email: string;
}

export type UserRole = "user" | "admin";

export interface JwtUser {
  id: string;
  email: string;
  role: UserRole;
}
export interface UserSummary {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  isBanned: boolean;
  createdAt: string;
}

export interface AdminStats {
  totalUsers: number;
  totalPosts: number;
  totalComments: number;
  adminCount: number;
  bannedCount: number;
  topAuthors: {
    authorId: string;
    authorName: string;
    authorEmail: string;
    postCount: number;
  }[];
  recentUsers: {
    _id: string;
    name: string;
    email: string;
    role: UserRole;
    isBanned: boolean;
    createdAt: string;
  }[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  createdAt?: string;
}

export interface Comment {
  id: string;
  text: string;
  user: string;
  createdAt?: string;
}

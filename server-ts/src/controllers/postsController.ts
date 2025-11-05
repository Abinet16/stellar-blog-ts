import { Request, Response } from 'express';
import Post from '../models/Post';
import { AuthRequest } from '../utils/auth';

export const createPost = async (req: AuthRequest, res: Response) => {
  try {
    const { title, content } = req.body;
    const author = req.userId;
    if (!author) return res.status(401).json({ message: 'Unauthorized' });
    const excerpt = content.slice(0, 200);
    const post = await Post.create({ title, content, author, excerpt });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const listPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate('author', 'name');
    if (!post) return res.status(404).json({ message: 'Not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

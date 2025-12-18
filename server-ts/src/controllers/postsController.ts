import { Request, Response } from "express";
import Post from "../models/Post";
import { AuthRequest } from "../middleware/auth";

export const listPosts = async (_req: Request, res: Response) => {
  const posts = await Post.find().populate("author", "name email");
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "name email"
  );
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

export const createPost = async (req: AuthRequest, res: Response) => {
  const post = await Post.create({
    ...req.body,
    author: req.user.id,
  });
  res.json(post);
};

export const updatePost = async (req: AuthRequest, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  const isOwner = post.author.toString() === req.user.id;
  const isAdmin = req.user.role === "admin";

  if (!isOwner && !isAdmin) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(post, req.body);
  await post.save();

  res.json(post);
};

export const deletePost = async (req: AuthRequest, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  const isOwner = post.author.toString() === req.user.id;
  const isAdmin = req.user.role === "admin";

  if (!isOwner && !isAdmin) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await post.deleteOne();
  res.json({ message: "Post deleted" });
};

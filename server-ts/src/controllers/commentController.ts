import { Request, Response } from "express";
import Comment from "../models/Comment";
import { AuthRequest } from "../middleware/auth";

export const listComments = async (req: Request, res: Response) => {
  const comments = await Comment.find({ post: req.params.id }).populate(
    "user",
    "name email"
  );
  res.json(comments);
};

export const addComment = async (req: AuthRequest, res: Response) => {
  const comment = await Comment.create({
    post: req.params.id,
    user: req.user.id,
    text: req.body.text,
  });

  res.json(comment);
};

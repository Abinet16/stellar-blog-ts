import { Request, Response } from "express";
import User from "../models/User";
import Post from "../models/Post";
import Comment from "../models/Comment";

export const getAdminStats = async (_req: Request, res: Response) => {
  const [
    totalUsers,
    totalPosts,
    totalComments,
    adminCount,
    bannedCount,
    topAuthors,
    recentUsers,
  ] = await Promise.all([
    User.countDocuments(),
    Post.countDocuments(),
    Comment.countDocuments(),
    User.countDocuments({ role: "admin" }),
    User.countDocuments({ isBanned: true }),
    Post.aggregate([
      { $group: { _id: "$author", postCount: { $sum: 1 } } },
      { $sort: { postCount: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "author",
        },
      },
      { $unwind: "$author" },
      {
        $project: {
          _id: 0,
          authorId: "$author._id",
          authorName: "$author.name",
          authorEmail: "$author.email",
          postCount: 1,
        },
      },
    ]),
    User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name email createdAt role isBanned"),
  ]);

  res.json({
    totalUsers,
    totalPosts,
    totalComments,
    adminCount,
    bannedCount,
    topAuthors,
    recentUsers,
  });
};

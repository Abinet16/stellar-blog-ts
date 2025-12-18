import { Schema, model, Document, Types } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  excerpt: string;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    excerpt: { type: String },
  },
  { timestamps: true }
);

// Auto-generate excerpt
PostSchema.pre("save", function (next) {
  if (!this.excerpt) {
    this.excerpt = this.content.substring(0, 150) + "...";
  }
  next();
});

export default model<IPost>("Post", PostSchema);

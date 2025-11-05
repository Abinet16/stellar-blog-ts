import { Schema, model, Document, Types } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  excerpt?: string;
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  excerpt: { type: String }
}, { timestamps: true });

export default model<IPost>('Post', PostSchema);

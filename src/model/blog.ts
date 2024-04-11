import mongoose, { Model } from 'mongoose';

export interface dbBlog {
  title: string;
  content: string;
  publishedAt: Date;
}

const blogSchema = new mongoose.Schema<dbBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Blog = mongoose.models.Blog
  ? (mongoose.models.Blog as Model<dbBlog>)
  : mongoose.model<dbBlog>('Blog', blogSchema);

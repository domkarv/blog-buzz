'use server';

import { connectDB } from '@/lib/dbConnect';
import { Blog, dbBlog } from '@/model/blog';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createBlog(title: string, content: string) {
  await connectDB();

  try {
    await Blog.create({ title, content });

    console.log('Blog created successfully!');
  } catch (error) {
    console.error('Error creating blog:', error);
  }

  revalidatePath('/');
  redirect(`/`);
}

export async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find();

    return blogs;
  } catch (error) {
    console.error('Error getting blogs:', error);
  }
}

export async function getBlog(id: string): Promise<dbBlog | null> {
  await connectDB();

  try {
    const blog = await Blog.findById(id);

    return blog;
  } catch (error) {
    console.error('Error getting blog:', error);
    return null;
  }
}

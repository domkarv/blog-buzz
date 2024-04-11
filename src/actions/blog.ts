'use server';

import { connectDB } from '@/lib/dbConnect';
import { Blog } from '@/model/blog';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createBlog(title: string, content: string) {
  await connectDB();

  try {
    const blog = new Blog({ title, content });

    await blog.save();

    console.log('Blog created successfully!');
  } catch (error) {
    console.error('Error creating blog:', error);
  }

  revalidatePath('/');
  redirect(`/`);
}

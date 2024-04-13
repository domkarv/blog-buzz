'use server';

import { db } from '../../drizzle';
import { BlogType, blog } from '../../drizzle/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createBlog(title: string, content: string) {
  try {
    await db.insert(blog).values({ title, content });

    console.log('Blog created successfully!');
  } catch (error) {
    console.error('Error creating blog:', error);
  }

  revalidatePath('/');
  redirect(`/`);
}

export async function getBlogs() {
  try {
    const blogs = await db.query.blog.findMany();
    return blogs;
  } catch (error) {
    console.error('Error getting blogs:', error);
  }
}

export async function getBlog(id: string): Promise<BlogType | null> {
  try {
    const oneBlog = await db.select().from(blog).where(eq(blog.id, id));

    if (!oneBlog[0]) return null;

    return oneBlog[0];
  } catch (error) {
    console.error('Error getting blog:', error);
    return null;
  }
}

import { getBlogs } from '@/actions/blog';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div className='my-8 text-primary'>
      {blogs ? (
        blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id}>
              <div className='flex flex-row justify-between'>
                <Link
                  href={`/blog/${blog.id}`}
                  className='py-2 text-xl font-bold hover:underline'
                >
                  {blog.title}
                </Link>
                <p className='text-sm text-gray-500'>
                  {`Published at ${new Date(blog.publishedAt).toLocaleDateString()}`}
                </p>
              </div>
              <div
                className='inline'
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content &&
                    blog.content
                      .replace(/<[^>]+>/g, '')
                      .split(' ')
                      .slice(0, 80)
                      .join(' ') + '...',
                }}
              />
              <Link
                href={`/blog/${blog.id}`}
                className='inline whitespace-nowrap text-sm text-blue-700'
              >
                {' '}
                Read more
              </Link>
              <Separator className='my-2' />
            </div>
          ))
        )
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

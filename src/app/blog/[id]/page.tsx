import React from 'react';
import { getBlog, getBlogs } from '@/actions/blog';
import { Separator } from '@/components/ui/separator';

type Params = {
  id: string;
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs?.map((blog) => ({
    params: { id: blog.id },
  }));
}

export default async function Page({ params }: { params: Params }) {
  const blog = await getBlog(params.id);

  if (!blog) {
    return <p>No blog found.</p>;
  }

  return (
    <div className='my-8 text-primary'>
      <h2 className='text-center text-xl font-bold'>{blog.title}</h2>
      <p className='text-center text-gray-500'>
        {`Published at ${new Date(blog.publishedAt).toLocaleDateString()}`}
      </p>
      <Separator className='my-2' />
      <div
        className='my-4 text-justify'
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </div>
  );
}

'use client';

import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import TipTapMenuBar from './tiptap-menu-bar';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { createBlog } from '@/actions/blog';

export default function TipTapEditor() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2],
          HTMLAttributes: {
            class: 'text-xl font-bold',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
      }),
    ],
    content: '<h1>Start writing here ...</h1>',
    editorProps: {
      attributes: {
        class: 'min-h-[60vh] p-4',
      },
    },
  });

  if (!editor) {
    return (
      <div className='flex h-96 items-center justify-center text-2xl font-bold text-primary'>
        Loading...
      </div>
    );
  }

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createBlog(inputRef.current!.value, editor!.getHTML());
  }

  return (
    <div className='mb-24 mt-8 flex flex-col justify-stretch rounded-md border text-primary'>
      <form onSubmit={onFormSubmit}>
        <Input
          className='h-16 rounded-b-none border-l-0 border-r-0 border-t-0 pl-4 text-2xl font-semibold shadow-none'
          placeholder='Title'
          type='text'
          name='title'
          ref={inputRef}
          required
        />
        <TipTapMenuBar editor={editor} />
        <Separator />
        <EditorContent editor={editor} />
      </form>
    </div>
  );
}

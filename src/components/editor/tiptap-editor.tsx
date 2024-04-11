'use client';

import React, { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import TipTapMenuBar from './tiptap-menu-bar';
import { Separator } from '../ui/separator';

export default function TipTapEditor({
  onChange,
}: {
  onChange: (data: string) => void;
}) {
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
    // onUpdate: ({ editor }) => {
    //   onChange(editor.getHTML());
    // },
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
    if (editor!.getHTML().length >= 50) {
      onChange(editor!.getHTML());
    }
  }

  return (
    <div className='flex flex-col justify-stretch rounded-md border text-primary'>
      <form onSubmit={onFormSubmit}>
        <TipTapMenuBar editor={editor} />
        <Separator />
        <EditorContent editor={editor} />
      </form>
    </div>
  );
}

import { Editor } from '@tiptap/react';
import {
  FontBoldIcon,
  CodeIcon,
  HeadingIcon,
  FontItalicIcon,
  ListBulletIcon,
  StrikethroughIcon,
} from '@radix-ui/react-icons';
import { Toggle } from '../ui/toggle';
import { Button } from '../ui/button';

export default function TipTapMenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  return (
    <div className='flex flex-row justify-between rounded-md bg-transparent p-2'>
      <div className='flex flex-row gap-2'>
        <Toggle
          size='sm'
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          pressed={editor.isActive('bold')}
        >
          <FontBoldIcon className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          pressed={editor.isActive('italic')}
        >
          <FontItalicIcon className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          pressed={editor.isActive('strike')}
        >
          <StrikethroughIcon className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
          pressed={editor.isActive('code')}
        >
          <CodeIcon className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          pressed={editor.isActive('heading', { level: 2 })}
        >
          <HeadingIcon className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          pressed={editor.isActive('bulletList')}
        >
          <ListBulletIcon className='size-4' />
        </Toggle>
      </div>
      <Button type='submit' className='font-semibold'>
        Publish
      </Button>
    </div>
  );
}

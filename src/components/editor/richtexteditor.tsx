'use client';

import React from 'react';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import ToolbarPlugin from './toolbarplugin';
import TreeViewPlugin from './treeviewplugin';
import { theme as ExampleTheme } from './theme';
import { Separator } from '../ui/separator';

const editorConfig: InitialConfigType = {
  namespace: 'Blog Buzz Rich Text Editor',
  nodes: [],
  // handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // editor theme
  theme: ExampleTheme,
};

export default function RichTextEditor() {
  return (
    <div className='mx-auto mb-24 max-w-5xl rounded-lg border-2 leading-none'>
      <LexicalComposer initialConfig={editorConfig}>
        <ToolbarPlugin />
        <Separator />
        <div className='relative leading-normal'>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className='min-h-80 resize-none p-4 caret-primary outline-0' />
            }
            placeholder={
              <p className='pointer-events-none absolute left-4 top-4 inline-block select-none overflow-hidden text-ellipsis text-input'>
                Start writing here...
              </p>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoFocusPlugin />
          {/* <HistoryPlugin /> */}
          {/* <TreeViewPlugin /> */}
        </div>
      </LexicalComposer>
    </div>
  );
}

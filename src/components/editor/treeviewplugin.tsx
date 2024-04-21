'use client';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TreeView } from '@lexical/react/LexicalTreeView';
import * as React from 'react';

export default function TreeViewPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  return (
    <TreeView
      viewClassName='block bg-gray-900 text-white px-2 py-2 text-xs whitespace-pre-wrap mx-auto my-1 sm:my-10 max-h-60 relative rounded-bl-lg rounded-br-lg overflow-auto leading-5'
      treeTypeButtonClassName='debug-treetype-button'
      timeTravelPanelClassName='overflow-hidden pb-10 mx-auto flex'
      timeTravelButtonClassName='absolute top-5 right-5 p-0 border-0 text-white text-xs hover:underline'
      timeTravelPanelSliderClassName='p-0 flex-1'
      timeTravelPanelButtonClassName='p-0 border-0 bg-transparent flex-1 text-white text-xs hover:underline'
      editor={editor}
    />
  );
}

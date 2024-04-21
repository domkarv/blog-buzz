'use client';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  TextAlignJustifyIcon,
  TextAlignRightIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  StrikethroughIcon,
  UnderlineIcon,
  FontItalicIcon,
  FontBoldIcon,
} from '@radix-ui/react-icons';
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { Button } from '../ui/button';

const LowPriority = 1;

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority,
      ),
    );
  }, [editor, $updateToolbar]);

  return (
    <div className='flex gap-2 p-2' ref={toolbarRef}>
      <Button
        size='icon'
        variant='secondary'
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        aria-label='Undo'
      >
        <ArrowLeftIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        aria-label='Redo'
      >
        <ArrowRightIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        aria-label='Format Bold'
      >
        <FontBoldIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        aria-label='Format Italics'
      >
        <FontItalicIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        aria-label='Format Underline'
      >
        <UnderlineIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        aria-label='Format Strikethrough'
      >
        <StrikethroughIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        aria-label='Left Align'
      >
        <TextAlignLeftIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        aria-label='Center Align'
      >
        <TextAlignCenterIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        aria-label='Right Align'
      >
        <TextAlignRightIcon className='size-5' />
      </Button>
      <Button
        size='icon'
        variant='secondary'
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        aria-label='Justify Align'
      >
        <TextAlignJustifyIcon className='size-5' />
      </Button>{' '}
    </div>
  );
}

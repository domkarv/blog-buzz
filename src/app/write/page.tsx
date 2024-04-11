'use client';

import TipTapEditor from '@/components/editor/tiptap-editor';
import { debounce } from '@/lib/debounce';

export default function Page() {
  const onDataChnage = debounce((data: string) => {
    console.log(data);
  }, 1000);

  return <TipTapEditor onChange={onDataChnage} />;
}

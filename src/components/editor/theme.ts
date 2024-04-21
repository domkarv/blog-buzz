import { EditorThemeClasses } from 'lexical';

export const theme: EditorThemeClasses = {
  code: 'bg-gray-200 font-mono block px-2 py-2 sm:px-8 sm:py-8 sm:ml-14 leading-relaxed text-sm overflow-x-auto relative',
  heading: {
    h1: 'text-xl text-gray-700 font-normal mb-3',
    h2: 'text-xs text-gray-600 font-bold mt-2 uppercase',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5',
  },
  image: 'editor-image',
  link: 'text-blue-500 no-underline',
  list: {
    listitem: 'mb-2',
    nested: {
      listitem: 'list-none',
    },
    ol: 'pl-4 list-decimal ml-4',
    ul: 'pl-4 list-disc ml-4',
  },
  ltr: 'ltr',
  rtl: 'rtl',
  paragraph: '',
  quote: 'ml-5 pl-4 border-l-4 border-gray-400 text-gray-600 text-sm',
  text: {
    bold: 'font-bold',
    code: 'bg-gray-200 px-1 py-0.25 font-mono text-xs',
    italic: 'italic',
    strikethrough: 'line-through',
    underline: 'underline',
    underlineStrikethrough: 'underline line-through',
  },
};

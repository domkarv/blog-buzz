import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const fontSchema = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Blog Buzz',
  description: 'Buzzing with Fresh Perspectives!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='select-none antialiased'>
      <body className={fontSchema.className}>{children}</body>
    </html>
  );
}

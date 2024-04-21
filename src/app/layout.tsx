import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const fontSchema = Poppins({
  subsets: ['latin'],
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
    <html lang='en' suppressHydrationWarning>
      <body className={`${fontSchema.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='container px-6'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Outfit } from 'next/font/google'; // Modern geometric sans
import './globals.css';

import { ThemeProvider } from '@/components/theme/provider';
import { ThemeColor } from '@/components/theme/theme-color';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Personal CV',
  description: 'Create your personal CV',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} selection:bg-primary/20 selection:text-primary flex min-h-screen flex-col font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColor />
          <Header />
          <main className="flex w-full flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

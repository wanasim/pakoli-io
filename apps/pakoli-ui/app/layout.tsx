import { Metadata } from 'next';
import Header from '@/components/Header';

import './globals.css';
import 'tailwindcss/tailwind.css';

export const metadata: Metadata = {
  title: 'Pakoli',
  description: 'Shop Authentic Afghan goods',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}

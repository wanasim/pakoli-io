import { Metadata } from 'next';
import Header from '@/components/Header';
import PakoliLogoHat from '../public/pk_logo_hat.svg';
import PakoliLogoText from '../public/pk_logo_text.svg';
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
        <Header logoImage={PakoliLogoHat} logoText={PakoliLogoText} />

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Exo_2 } from 'next/font/google';
import FloatButton from '@/components/shared/FloatButton';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import LenisProvider from '@/components/shared/LenisProvider';
import SmoothScrollWrapper from '@/components/shared/SmoothScrollWrapper';

const exo_2 = Exo_2({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KBQ TECH-HUB: One Hub, Endless Digital Possibilities.',
  description:
    'Transforming businesses with cutting-edge solutions, creative expertise, and impactful training to lead in the digital age.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo_2.className} antialiased`}>
        <LenisProvider>
          <Header />
          <SmoothScrollWrapper>
            <main className="min-h-screen max-w-7xl mx-auto px-4 pt-4">{children}</main>
            <FloatButton />
            <Footer />
          </SmoothScrollWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}

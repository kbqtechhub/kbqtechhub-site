import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/shared/Header';
import { Exo_2 } from 'next/font/google'

const exo_2 = Exo_2({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "KBQ TECH-HUB: One Hub, Endless Digital Possibilities.",
  description: "Transforming businesses with cutting-edge solutions, creative expertise, and impactful training to lead in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo_2.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

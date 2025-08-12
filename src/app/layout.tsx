'use client';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
        <title>Rajat Goyal</title>
        <meta name="description" content="Professional portfolio showcasing my work and skills" />
      </head> */}
      <head>
  <title>Rajat Goyal</title>
  <meta name="description" content="Professional portfolio showcasing my work and skills" />

  {/* Favicons */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0066A1" />
  <meta name="theme-color" content="#ffffff" />
</head>

      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
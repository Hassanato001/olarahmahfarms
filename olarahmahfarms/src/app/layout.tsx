// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // <-- IMPORT YOUR NAVBAR

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Olarahmah's Integrated Farm", // <-- UPDATE THE TITLE
  description: 'Fresh, safe, and nutritious poultry products in Nigeria.', // <-- UPDATE THE DESCRIPTION
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* <-- ADD THE NAVBAR HERE */}
        <main>{children}</main> {/* This is where page content will go */}
        {/* We'll add a Footer component here later */}
      </body>
    </html>
  );
}
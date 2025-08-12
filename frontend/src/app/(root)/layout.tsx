import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eKart",
  description: "Created by Vivek Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" light dark:bg-dark dark:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:px-8`}
      >
        {children}
      </body>
    </html>
  );
}

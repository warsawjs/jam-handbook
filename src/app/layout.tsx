import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cursor IDE Handbook",
  description: "A comprehensive guide with tips and tricks for using Cursor IDE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b p-4 flex items-center justify-between bg-white">
          <h1 className="text-xl font-bold">Cursor IDE Handbook</h1>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 border-r hidden md:block">
            <Navigation />
          </aside>
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

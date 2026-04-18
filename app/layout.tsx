import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SettingsProvider } from "@/context/SettingsContext";
import AppSidebar from "@/components/sidebar/AppSidebar";
import MobileSidebar from "@/components/sidebar/MobileSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quran App",
  description: "Quran Web Application",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&family=Scheherazade+New&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="h-screen flex flex-col md:flex-row">

      
        <SettingsProvider>

          {/* Desktop Sidebar */}
          <AppSidebar />

          {/* Mobile Top Bar */}
          <div className="md:hidden px-2 py-3 border-b flex justify-between items-start bg-white/60 shadow-sm backdrop-blur-lg">
            <MobileSidebar />
            <h1 className="ml-2 font-bold text-2xl">Al Quran </h1>
          </div>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>

        </SettingsProvider>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import { SettingsProvider } from "@/context/SettingsContext";

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

      <body className="h-screen flex">
        <SettingsProvider>
          <div className="hidden md:block">
            <AppSidebar />
          </div>

          <main className="flex-1 overflow-y-auto">{children}</main>
        </SettingsProvider>
      </body>
    </html>
  );
}

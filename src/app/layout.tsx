import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reparatech",
  description: "A sua loja de reparos tecnologicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
  <head />
  <body className="antialiased">
    <Analytics />
    <Header />
    <main className="pt-24">{children}</main>
  </body>
</html>
  );
}

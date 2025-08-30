"use client";

import "./output.css";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

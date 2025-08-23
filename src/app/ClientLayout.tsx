"use client";

import "./output.css";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/header/Header";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      {children}
    </ThemeProvider>
  );
}

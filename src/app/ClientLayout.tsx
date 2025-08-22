"use client";

import "./globals.css";

import { ThemeProvider } from "next-themes";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

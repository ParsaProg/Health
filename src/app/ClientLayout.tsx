"use client";

import "./globals.css";

import FontHOCComponent from "./fontSetHOC";
import { ThemeProvider } from "next-themes";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <FontHOCComponent>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </FontHOCComponent>
  );
}

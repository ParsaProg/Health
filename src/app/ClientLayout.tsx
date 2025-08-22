"use client";

import { useEffect, useState } from "react";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/header/Header";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [themeLocal, setThemeLocal] = useState<string>("system");
  useEffect(() => {
    const storageTheme = window.localStorage.getItem("theme") ?? "system";
    setThemeLocal(storageTheme);
  });
  return (
    <ThemeProvider attribute="class" defaultTheme={themeLocal!} enableSystem>
      <Header />
      {children}
    </ThemeProvider>
  );
}

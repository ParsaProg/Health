import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health Platform",
  description:
    " Get you'r life and body healthy with parsa and yasna on content project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa">
      <body>{children}
        
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import FontHOCComponent from "./fontSetHOC";

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
      <body>
        <FontHOCComponent>{children}</FontHOCComponent>
      </body>
    </html>
  );
}

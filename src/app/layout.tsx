import Header from "@/components/ui/header/Header";
import ClientLayout from "./ClientLayout";
import type { Metadata } from "next";
import FontHOCComponent from "../HOC/fontSetHOC";

export const metadata: Metadata = {
  title: "Health Platform",
  description: "Get your body healthy with this app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className="light" style={{ colorScheme: "light" }}>
      <body>
        <FontHOCComponent>
          <Header />
          <ClientLayout>{children}</ClientLayout>
        </FontHOCComponent>
      </body>
    </html>
  );
}
